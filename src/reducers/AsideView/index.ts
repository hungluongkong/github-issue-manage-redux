import Action from '../../constants/actions';
import { Issue, AsideState, AsideActionPayload } from '../../types';

export const defaultState: AsideState = {
  isShowForm: false,
  isShowIssue: false,
  issue: {} as Issue,
  error: '',
};

const asideReducer = (
  state: AsideState = defaultState,
  action: AsideActionPayload,
): AsideState => {
  switch (action.type) {
    case Action.TOGGLE_FORM:
      return {
        ...state,
        isShowIssue: false,
        isShowForm: !state.isShowForm,
        issue: action.issue || ({} as Issue),
      };

    case Action.TOGGLE_ISSUE:
      return {
        ...state,
        isShowForm: false,
        isShowIssue: action.issue?.id !== state.issue.id || !state.isShowIssue,
        issue: action.issue || ({} as Issue),
      };

    case Action.TOGGLE_ERROR:
      return {
        ...state,
        error: action.error || '',
      };
    default:
      return state;
  }
};

export default asideReducer;
