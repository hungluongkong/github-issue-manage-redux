import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'enzyme';
import configureStore from 'redux-mock-store';

import IssueList from '../IssueList';
import Button from '../../components/Button';
import IssueItem, { TitleWrapper } from '../../components/IssueItem';

import { toggleLockIssue } from '../../actions/issues';
import { toggleIssue, toggleForm } from '../../actions/asideView';
import { RootReducerState, Issue } from '../../types';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

describe('Unit test for Form container', () => {
  const issues: Issue[] = JsonToIssueList(issueListJson);
  const mockStore = configureStore();
  const store = mockStore({
    issues: {
      issues,
      error: '',
      lastTaskTime: new Date(),
      pending: false,
      task: '',
    },
    asideView: {
      isShowForm: false,
      error: '',
      isShowIssue: false,
      issue: {} as Issue,
    },
  } as RootReducerState);

  const wrapper = renderer.mount(
    <Provider store={store}>
      <IssueList />
    </Provider>,
  );

  it('should render all of list', () => {
    const displayList = wrapper.find(IssueItem);
    expect(displayList.length).toEqual(issues.length);
  });

  it('should dispatch lock action', () => {
    const button = wrapper.find(Button).at(1);
    button.simulate('click');

    expect(store.getActions()).toEqual([toggleLockIssue(issues[0])]);
  });

  it('should dispatch show issue content action', () => {
    const issueItem = wrapper.find(IssueItem).at(0);
    issueItem.find(TitleWrapper).simulate('click');

    expect(store.getActions().pop()).toEqual(toggleIssue(issues[0]));
  });

  it('should dispatch show form action', () => {
    const addBtn = wrapper.find(Button).at(0);
    addBtn.simulate('click');

    expect(store.getActions().pop()).toEqual(toggleForm());
  });
});
