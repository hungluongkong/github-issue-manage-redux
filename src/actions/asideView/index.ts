import Action from '../../constants/actions';
import { AsideActionPayload, Issue } from '../../types';

export const toggleForm = (issue?: Issue): AsideActionPayload => ({
  type: Action.TOGGLE_FORM,
  issue: issue || {} as Issue,
});

export const toggleIssue = (issue: Issue): AsideActionPayload => ({
  type: Action.TOGGLE_ISSUE,
  issue,
});

export const handleError = (error: string): AsideActionPayload => ({
  type: Action.TOGGLE_ERROR,
  error,
});
