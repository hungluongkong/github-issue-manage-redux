import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Button from '../Button';
import IssueItem, {
  TitleWrapper,
  IssueTitle,
} from '../IssueItem';

import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for IssueItem component', () => {
  const [issue] = JsonToIssueList(issueListJson);

  it('snapshot', () => {
    const issueItem = create(
      <IssueItem
        issue={issue}
        onToggleContent={jest.fn()}
        onToggleLock={jest.fn()}
      />,
    );
    expect(issueItem).toMatchSnapshot();
  });

  it('simulate toggle issue content', () => {
    const onToggleContent = jest.fn();
    const issueItem = shallow(
      <IssueItem
        issue={issue}
        onToggleContent={onToggleContent}
        onToggleLock={() => {}}
      />,
    );

    issueItem.find(TitleWrapper).simulate('click');
    expect(onToggleContent).toBeCalledTimes(1);
  });

  it('simulate edit button click', () => {
    const onToggleLock = jest.fn();
    const issueItem = shallow(
      <IssueItem
        issue={issue}
        onToggleContent={() => {}}
        onToggleLock={onToggleLock}
      />,
    );

    issueItem.find(Button).simulate('click');
    expect(onToggleLock).toBeCalledTimes(1);
  });

  it('should display issue title', () => {
    const issueItem = shallow(
      <IssueItem
        issue={issue}
        onToggleContent={() => {}}
        onToggleLock={() => {}}
      />,
    );

    expect(issueItem.find(IssueTitle).text()).toEqual(issue.title);
  });
});
