import { combineReducers } from 'redux';
import issuesReducer from './IssuesReducer';
import asideReducer from './AsideView';

// Reducers container
const reducers = combineReducers({
  issues: issuesReducer,
  asideView: asideReducer,
});

export default reducers;
