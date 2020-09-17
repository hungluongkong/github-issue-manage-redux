import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import IssueList from '../IssueList';
import IssueItem from '../IssueItem';
import LoadingBar from '../LoadingBar';

import { IssueListProps } from '../../types';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for IssueList component', () => {
  const issues = JsonToIssueList(issueListJson);
  const defaultProps: IssueListProps = {
    issues,
    getIssues: jest.fn(),
    toggleForm: jest.fn(),
    toggleIssue: jest.fn(),
    toggleLockIssue: jest.fn(),
    lastTaskTime: new Date(),
    loading: false,
    task: '',
    isShowForm: false,
  };

  it('snapshot', () => {
    const issueList = create(<IssueList {...defaultProps} />);
    expect(issueList).toMatchSnapshot();
  });

  it('should display all issue', () => {
    const issueList = shallow(<IssueList {...defaultProps} />);
    expect(issueList.find(IssueItem).length).toEqual(issues.length);
  });

  it('should display loading', () => {
    const issueList = shallow(
      <IssueList {...{ ...defaultProps, loading: true }} />,
    );
    expect(issueList.find(LoadingBar).exists()).toEqual(true);
  });
});
