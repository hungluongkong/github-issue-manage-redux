import { put, all, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { AxiosRequestConfig } from 'axios';

import api from '../api';
import Action from '../constants/actions';
import ResponseCode from '../constants/response';
import * as localize from './../constants/localize';
import { RawToIssue, RawIssue } from '../helpers/jsonHelper';
import { ActionPayload } from '../types';
import {
  getIssueSuccess,
  getIssueError,
  updateIssueSuccess,
} from '../actions/issues';

type RequestMethod = <T, U = T>(url: string, data?: any, axiosConfig?: AxiosRequestConfig) => Promise<ApiResponse<T, U>>;

/**
 * Saga function handle fetch issues from API
 * Send success or error status to reducer.
 */
export function *fetchIssuesHandler() {
  try {
    const response = yield api.get('');
    if (response.status === ResponseCode.OK && response.data) {
      yield put(
        getIssueSuccess(
          RawToIssue(response.data),
        ),
      );
    } else {
      yield put(getIssueError(response.data.message));
    }
  } catch (error) {
    yield put(getIssueError(error.toString()));
  }
}

export function *fetchIssuesSaga() {
  yield takeEvery(
    Action.GET_ISSUES,
    fetchIssuesHandler,
  );
}

export function *handleIssueUpdate(action: ActionPayload) {
  try {
    const method: RequestMethod = action.issue?.id ? api.patch : api.post;
    const response: ApiResponse<RawIssue & { message: string }> = yield method(action.issue?.url || '', action.issue);

    // If add new issue. Update action params
    if (response.data && (response.status === ResponseCode.CREATED || response.status === ResponseCode.OK)) {
      yield put(updateIssueSuccess(RawToIssue([response.data])[0]));
    } else {
      yield put(getIssueError(response.data?.message || localize.en.ERROR_SOMETHING_WRONG));
    }
  } catch (error) {
    yield put(getIssueError(error.toString()));
  }
}

export function *updateIssueSaga() {
  yield takeEvery<string, any>(
    Action.UPDATE_ISSUE,
    handleIssueUpdate,
  );
}

export function *handleToggleIssue(action: ActionPayload) {
  try {
    const {issue} = action;
    if (!issue) {
      return;
    }

    const method = !issue.locked ? api.put : api.delete;
    const response = yield method(
      `${issue.url}/lock`,
      { locked: !issue.locked },
    );

    // Update issue if it ok.
    if (response.status === ResponseCode.NO_CONTENT) {
      yield put(
        updateIssueSuccess({...issue, locked: !issue.locked}),
      );
    } else {
      yield put(getIssueError(response.data.message));
    }
  } catch (error) {
    yield put(getIssueError(error.toString()));
  }
}

export function *toggleIssueSaga() {
  yield takeEvery<string, any>(
    Action.TOGGLE_LOCK_ISSUE,
    handleToggleIssue,
  );
}

// Root sagas
export default function *rootSaga() {
  yield all([
    fetchIssuesSaga(),
    updateIssueSaga(),
    toggleIssueSaga(),
  ]);
}
