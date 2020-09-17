import { connect } from 'react-redux';
import { RootReducerState } from '../../types';
import AsideView from '../../components/AsideView';
import { updateIssue } from '../../actions/issues';
import { toggleIssue, toggleForm } from '../../actions/asideView';

const mapStateToProps = (state: RootReducerState) => ({
  isShowIssue: state.asideView.isShowIssue,
  isShowForm: state.asideView.isShowForm,
  issue: state.asideView.issue,
});

const mapDispatchToProps = {
  updateIssue,
  toggleIssue,
  toggleForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideView);
