import asideReducer, { defaultState } from '../AsideView';
import * as AsideAction from './../../actions/asideView';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';
import { AsideActionPayload } from '../../types';
import { handleError } from '../../actions/asideView/index';
import { AsideState } from '../../types/index';

describe('Unit test for initial reducer', () => {
  it('should return the initial state', () => {
    expect(asideReducer(undefined, {} as AsideActionPayload)).toEqual(
      defaultState,
    );
  });

  it('should handle TOGGLE_FORM action', () => {
    expect(asideReducer(defaultState, AsideAction.toggleForm())).toEqual({
      ...defaultState,
      isShowIssue: false,
      isShowForm: true,
      error: '',
    });
  });

  it('should handle TOGGLE_ISSUE action', () => {
    // Need use true data
    const [issue] = JsonToIssueList(issueListJson);
    const nextState: AsideState = {
      ...defaultState,
      isShowForm: false,
      isShowIssue: true,
      issue,
    };

    expect(asideReducer(defaultState, AsideAction.toggleIssue(issue))).toEqual(
      nextState,
    );

    // Toggle again
    expect(asideReducer(nextState, AsideAction.toggleIssue(issue))).toEqual({
      ...nextState,
      isShowIssue: false,
    });
  });

  it('should handle TOGGLE_ERROR action', () => {
    // Need use true data
    const error: string = 'some error';
    expect(asideReducer(defaultState, AsideAction.handleError(error))).toEqual({
      ...defaultState,
      error,
    });
  });
});
