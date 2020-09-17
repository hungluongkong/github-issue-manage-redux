import Action from '../../constants/actions';
import * as AsideAction from './../asideView';
import { AsideActionPayload, Issue } from '../../types';

describe('Unit test for aside view actions', () => {
  it('should create an action for toggle form', () => {
    const issue: Issue = {} as Issue;
    const action: AsideActionPayload = {
      type: Action.TOGGLE_FORM,
      issue,
    };

    expect(AsideAction.toggleForm(issue)).toEqual(action);
  });

  it('should create an action for toggle issue', () => {
    const issue: Issue = {} as Issue;
    const action: AsideActionPayload = {
      type: Action.TOGGLE_ISSUE,
      issue,
    };

    expect(AsideAction.toggleIssue(issue)).toEqual(action);
  });

  it('should create an action for toggle form', () => {
    const error: string = 'some error';
    const action: AsideActionPayload = {
      type: Action.TOGGLE_ERROR,
      error,
    };

    expect(AsideAction.handleError(error)).toEqual(action);
  });
});
