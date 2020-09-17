import Action from '../../constants/actions';
import { ActionPayload, Issue } from '../../types';
import * as localize from '../../constants/localize';

export const getIssues = (): ActionPayload => ({
  type: Action.GET_ISSUES,
});

/** Handle error on working with api */
export const getIssueError = (error: string): ActionPayload => ({
  type: Action.GET_ISSUES_ERROR,
  error,
});

/** Handle on fetch list of issues succeeded */
export const getIssueSuccess = (issues: Issue[]): ActionPayload => ({
  type: Action.GET_ISSUES_SUCCESS,
  issues,
  msg: localize.en.INFORM_ISSUES_GET_DONE,
});

/** Handle add issue, update issue (include lock status) */
export const updateIssueSuccess = (issue: Issue): ActionPayload => ({
  type: Action.UPDATE_ISSUE_SUCCESS,
  issue,
  msg: localize.en.INFORM_UPDATE_DONE,
});

export const updateIssue = (issue: Issue): ActionPayload => ({
  type: Action.UPDATE_ISSUE,
  issue,
});

/** Trigger lock/unlock issue */
export const toggleLockIssue = (issue: Issue): ActionPayload => ({
  type: Action.TOGGLE_LOCK_ISSUE,
  issue,
});

export const reportTask = (): ActionPayload => ({
  type: Action.REPORT_TASK,
});
