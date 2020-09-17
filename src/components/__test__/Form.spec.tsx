import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import IssueForm from '../Form';
import Button from '../Button';
import Input from '../Input';

import * as localize from '../../constants/localize';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for Issue Form component', () => {
  it('snapshot', () => {
    const buttonComponent = create(<IssueForm onSubmit={() => {}} />);
    expect(buttonComponent).toMatchSnapshot();
  });

  it('should show form', () => {
    const form = shallow(<IssueForm onSubmit={jest.fn()} />);
    expect(form.find(Button).prop('value')).toEqual(localize.en.BTN_SUBMIT);
  });

  it('simulate submit', () => {
    const onSubmit = jest.fn();
    const [issue] = JsonToIssueList(issueListJson);
    const form = shallow(<IssueForm issue={issue} onSubmit={onSubmit} />);

    form.find(Button).simulate('click');
    expect(onSubmit).toBeCalledTimes(1);
  });

  it('should received data on submit', () => {
    const newTitle = 'new value';
    const onSubmit = jest.fn();
    const form = mount(<IssueForm onSubmit={onSubmit} />);
    form.find(Input).getDOMNode<HTMLInputElement>().value = newTitle;
    form.find(Button).simulate('click');
    expect(onSubmit).toBeCalledWith({ body: '', title: newTitle });
  });
});
