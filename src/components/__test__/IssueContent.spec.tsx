import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import IssueContent from '../IssueContent';
import Button from '../Button';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for IssueContent component', () => {
  const [issue] = JsonToIssueList(issueListJson);

  it('snapshot', () => {
    const issueContent = create(
      <IssueContent issue={issue} onEditPressed={() => {}} />,
    );
    expect(issueContent).toMatchSnapshot();
  });

  it('should render all child component', () => {
    const issueContent = mount(
      <IssueContent issue={issue} onEditPressed={() => {}} />,
    );

    expect(issueContent.children().length).toEqual(1);
    expect(issueContent.find(Button).exists()).toEqual(true);
  });

  it('simulate edit button click', () => {
    const mockClick = jest.fn();
    const issueContent = shallow(
      <IssueContent issue={issue} onEditPressed={mockClick} />,
    );

    issueContent.find(Button).simulate('click');
    expect(mockClick).toBeCalledTimes(1);
  });
});
