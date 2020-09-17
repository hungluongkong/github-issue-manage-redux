import Action from '../../constants/actions';
import { Issue, IssueState, ActionPayload } from '../../types';

export const defaultState: IssueState = {
  issues: [],
  pending: false,
  error: '',
  task: '',
  lastTaskTime: new Date(),
};

const issuesReducer = (
  state: IssueState = defaultState,
  action: ActionPayload,
): IssueState => {
  switch (action.type) {
    case Action.GET_ISSUES:
    case Action.TOGGLE_ISSUE:
    case Action.UPDATE_ISSUE:
      return state;

    case Action.GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.issues || [],
      };

    case Action.UPDATE_ISSUE_SUCCESS:
      if (action.issue) {
        const index = state.issues.findIndex(
          (issue: Issue) => issue.id === action.issue?.id,
        );

        const tempArr: Issue[] = [];
        tempArr[index] = action.issue;
        // Add issue
        return {
          ...state,
          issues:
            index === -1
              ? [...state.issues, action.issue]
              : Object.assign([...state.issues], tempArr),
          task: action.msg || '',
          lastTaskTime: new Date(),
          pending: false,
        };
      }
      return state;

    default:
      return state;
  }
};

// Reducer
export default issuesReducer;
