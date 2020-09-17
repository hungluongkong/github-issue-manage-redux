import Action from '../../constants/actions';
import * as IssueAction from './../issues';
import { ActionPayload, Issue } from '../../types';
import * as localize from './../../constants/localize';

describe('Unit test for issues actions', () => {
  it('should create an action for get issue', () => {
    const action: ActionPayload = {
      type: Action.GET_ISSUES,
    };
    expect(IssueAction.getIssues()).toEqual(action);
  });

  it('should create an action for get issue error', () => {
    const error: string = 'some error';
    const action: ActionPayload = {
      type: Action.GET_ISSUES_ERROR,
      error,
    };
    expect(IssueAction.getIssueError(error)).toEqual(action);
  });

  it('should create an action for get issue success', () => {
    const issues: Issue[] = [];
    const action: ActionPayload = {
      type: Action.GET_ISSUES_SUCCESS,
      issues,
      msg: localize.en.INFORM_ISSUES_GET_DONE,
    };
    expect(IssueAction.getIssueSuccess(issues)).toEqual(action);
  });

  it('should create an action for update issue success', () => {
    const issue: Issue = {} as Issue;
    const action: ActionPayload = {
      type: Action.UPDATE_ISSUE_SUCCESS,
      issue,
      msg: localize.en.INFORM_UPDATE_DONE,
    };
    expect(IssueAction.updateIssueSuccess(issue)).toEqual(action);
  });

  it('should create an action for update issue', () => {
    const issue: Issue = {} as Issue;
    const action: ActionPayload = {
      type: Action.UPDATE_ISSUE,
      issue,
    };
    expect(IssueAction.updateIssue(issue)).toEqual(action);
  });

  it('should create an action for toggle issue lock', () => {
    const issue: Issue = {} as Issue;
    const action: ActionPayload = {
      type: Action.TOGGLE_LOCK_ISSUE,
      issue,
    };
    expect(IssueAction.toggleLockIssue(issue)).toEqual(action);
  });

  it('should create an action for update reportTask', () => {
    const action: ActionPayload = {
      type: Action.REPORT_TASK,
    };
    expect(IssueAction.reportTask()).toEqual(action);
  });
});
