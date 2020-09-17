import { connect } from 'react-redux';
import { RootReducerState } from '../../types';
import IssueList from '../../components/IssueList';
import { getIssues, updateIssue, toggleLockIssue } from '../../actions/issues';
import { toggleIssue, toggleForm } from '../../actions/asideView';

const mapStateToProps = (state: RootReducerState) => ({
  issues: state.issues.issues,
  loading: state.issues.pending,
  task: state.issues.task,
  lastTaskTime: state.issues.lastTaskTime,
  isShowForm: state.asideView.isShowForm,
});

const mapDispatchToProps = {
  getIssues,
  updateIssue,
  toggleIssue,
  toggleForm,
  toggleLockIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
