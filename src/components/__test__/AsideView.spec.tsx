import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import AsideView from '../AsideView';
import IssueForm from '../Form';
import IssueContent from '../IssueContent';
import { AsideViewProps, Issue } from '../../types';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for AsideView component', () => {
  const [issue]: Issue[] = JsonToIssueList(issueListJson);

  const defaultProps: AsideViewProps = {
    isShowForm: false,
    isShowIssue: false,
    issue,

    // Events should be test by child components.
    toggleForm: jest.fn(),
    toggleIssue: jest.fn(),
    updateIssue: jest.fn(),
  };

  it('snapshot', () => {
    const asideView = create(<AsideView {...{...defaultProps, isShowIssue: true}} />);
    expect(asideView).toMatchSnapshot();
  });

  it('should show nothing', () => {
    const asideView = create(<AsideView {...defaultProps} />).toJSON();
    expect(asideView).toBeNull();
  });

  it('should show form', () => {
    const asideView = shallow(<AsideView {...{...defaultProps, isShowForm: true}} />);
    expect(asideView.find(IssueForm).exists()).toEqual(true);
  });

  it('should show issue content', () => {
    const asideView = shallow(<AsideView {...{...defaultProps, isShowIssue: true}} />);
    expect(asideView.find(IssueContent).exists()).toEqual(true);
  });
});
