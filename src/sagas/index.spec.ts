import { ApiResponse } from 'apisauce';
import { takeEvery, put } from 'redux-saga/effects';

import { JsonToIssueList } from '../helpers/jsonHelper';
import { issueListJson, issueJson } from '../constants/storiesTempData';
import ResponseCode from '../constants/response';
import { Issue } from '../types/index';

import {
  toggleIssueSaga,
  handleToggleIssue,
  fetchIssuesHandler,
  fetchIssuesSaga,
  updateIssueSaga,
  handleIssueUpdate,
} from '.';
import {
  getIssueSuccess,
  getIssueError,
  updateIssue,
  updateIssueSuccess,
  toggleLockIssue,
} from '../actions/issues';

describe('SAGAS', () => {
  // Mock data
  const issues = JsonToIssueList(issueListJson);
  const mockResponse: ApiResponse<any> = {
    ok: true,
    originalError: null,
    status: ResponseCode.OK,
    problem: null,
    data: JSON.parse(issueListJson),
  };

  it('should dispatch action TOGGLE_LOCK_ISSUE', () => {
    const generator = toggleIssueSaga();
    expect(generator.next().value)
      .toEqual(takeEvery('TOGGLE_LOCK_ISSUE', handleToggleIssue));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action GET_ISSUES', () => {
    const generator = fetchIssuesSaga();
    expect(generator.next().value)
      .toEqual(takeEvery('GET_ISSUES', fetchIssuesHandler));
    expect(generator.next().done).toBeTruthy();
  });


  it('should dispatch action UPDATE_ISSUE', () => {
    const generator = updateIssueSaga();
    expect(generator.next().value)
      .toEqual(takeEvery('UPDATE_ISSUE', handleIssueUpdate));
    expect(generator.next().done).toBeTruthy();
  });

  // Get Issue success handle
  it('should dispatch action "GET_ISSUES_SUCCESS" with result from fetch News API', () => {
    const generator = fetchIssuesHandler();
    generator.next();

    expect(generator.next(mockResponse).value)
      .toEqual(put(getIssueSuccess(issues)));

    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_ISSUES_ERROR" with result from fetch News API', () => {
    const error: string = 'Get error';

    const generator = fetchIssuesHandler();
    generator.next();
    const errorResponse: ApiResponse<any> = {
      ...mockResponse,
      data: { message: error },
      status: ResponseCode.NOT_FOUND,
    };

    expect(generator.next(errorResponse).value)
      .toEqual(put(getIssueError(error)));

    expect(generator.next().done).toBeTruthy();
  });

  // Update Issue success handle
  it('should dispatch action "UPDATE_ISSUE_SUCCESS" with result from update Issue', () => {
    // eslint-disable-next-line prefer-destructuring
    const issue: Issue = issues[0];

    const generator = handleIssueUpdate(updateIssue(issue));
    generator.next();
    const errorResponse: ApiResponse<any> = {
      ...mockResponse,
      status: ResponseCode.CREATED,
      data: JSON.parse(issueJson),
    };

    expect(generator.next(errorResponse).value)
      .toEqual(put(updateIssueSuccess(issue)));

    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_ISSUES_ERROR" with result from fetch News API', () => {
    const error: string = 'Error on Update';

    // eslint-disable-next-line prefer-destructuring
    const issue: Issue = issues[0];

    const generator = handleIssueUpdate(updateIssue(issue));
    generator.next();
    const errorResponse: ApiResponse<any> = {
      ...mockResponse,
      status: ResponseCode.NOT_FOUND,
      data: { message: error },
    };

    expect(generator.next(errorResponse).value)
      .toEqual(put(getIssueError(error)));

    expect(generator.next().done).toBeTruthy();
  });

  // Toggle lock issue handle
  it('should dispatch action "UPDATE_ISSUE_SUCCESS" with result from Toggle Lock Issue', () => {
    // eslint-disable-next-line prefer-destructuring
    const issue: Issue = issues[0];

    const generator = handleToggleIssue(toggleLockIssue(issue));
    generator.next();
    const errorResponse: ApiResponse<any> = {
      ...mockResponse,
      status: ResponseCode.NO_CONTENT,
      data: JSON.parse(issueJson),
    };

    expect(generator.next(errorResponse).value)
      .toEqual(put(updateIssueSuccess({...issue, locked: !issue.locked})));

    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_ISSUES_ERROR" with result from fetch News API', () => {
    const error: string = 'Error on Lock/Unlock';

    // eslint-disable-next-line prefer-destructuring
    const issue: Issue = issues[0];

    const generator = handleToggleIssue(toggleLockIssue(issue));
    generator.next();
    const errorResponse: ApiResponse<any> = {
      ...mockResponse,
      status: ResponseCode.NOT_FOUND,
      data: { message: error },
    };

    expect(generator.next(errorResponse).value)
      .toEqual(put(getIssueError(error)));

    expect(generator.next().done).toBeTruthy();
  });
});
