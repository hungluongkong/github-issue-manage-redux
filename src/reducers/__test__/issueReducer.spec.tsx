import issuesReducer, { defaultState } from '../IssuesReducer';
import * as IssueAction from './../../actions/issues';
import { ActionPayload, Issue } from '../../types';
import * as localize from './../../constants/localize';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for auth reducer', () => {
  it('should return the initial state', () => {
    expect(issuesReducer(undefined, {} as ActionPayload)).toEqual(
      // Default state for init
      defaultState,
    );
  });

  it('should handle GET_ISSUES action', () => {
    expect(issuesReducer(defaultState, IssueAction.getIssues())).toEqual(
      // This action not make change. pending default is true.
      defaultState,
    );
  });

  it('should handle TOGGLE_ISSUE action', () => {
    const issue: Issue = {} as Issue;
    expect(
      issuesReducer(defaultState, IssueAction.toggleLockIssue(issue)),
    ).toEqual(
      // This action not make change. pending default is true.
      defaultState,
    );
  });

  it('should handle UPDATE_ISSUE action', () => {
    const issue: Issue = {} as Issue;
    expect(issuesReducer(defaultState, IssueAction.updateIssue(issue))).toEqual(
      // This action not make change. pending default is true.
      defaultState,
    );
  });

  it('should handle GET_ISSUES_SUCCESS action', () => {
    const issues: Issue[] = JsonToIssueList(issueListJson);
    expect(
      issuesReducer(defaultState, IssueAction.getIssueSuccess(issues)),
    ).toEqual({ ...defaultState, issues });
  });

  it('should handle UPDATE_ISSUE_SUCCESS action', () => {
    const issues: Issue[] = JsonToIssueList(issueListJson);
    const updatedIssue: Issue = {
      ...issues[0],
      title: `${issues[0].title} updated`,
    };

    expect(
      issuesReducer(
        { ...defaultState, issues },
        IssueAction.updateIssueSuccess(updatedIssue),
      ),
    ).toEqual({
      ...defaultState,
      issues: [updatedIssue, ...issues.slice(1, issues.length)],

      lastTaskTime: new Date(),
      task: localize.en.INFORM_UPDATE_DONE,
    });
  });
});
