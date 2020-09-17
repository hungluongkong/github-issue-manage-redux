import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Button from '../../components/Button';
import AsideView from '../AsideView';
import { toggleForm, toggleIssue } from '../../actions/asideView';
import { updateIssue } from '../../actions/issues';

import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';
import {
  RootReducerState,
  Issue,
  IssueState,
} from '../../types';

describe('Unit test for Form container', () => {
  const issues: Issue[] = JsonToIssueList(issueListJson);
  const issueState: IssueState = {
    issues,
    error: '',
    lastTaskTime: new Date(),
    pending: false,
    task: '',
  };
  const asideViewState = {
    isShowForm: false,
    error: '',
    isShowIssue: true,
    issue: issues[0],
  };

  const mockStore = configureStore();

  it('should dispatch toggle form action', () => {
    const store = mockStore({
      issues: issueState,
      asideView: asideViewState,
    } as RootReducerState);

    const wrapper = mount(
      <Provider store={store}>
        <AsideView />
      </Provider>,
    );

    wrapper.find(Button).at(0).simulate('click');
    expect(store.getActions()).toEqual([toggleForm(issues[0])]);
  });

  it('should dispatch toggle form action', () => {
    const store = mockStore({
      issues: issueState,
      asideView: asideViewState,
    } as RootReducerState);

    const wrapper = mount(
      <Provider store={store}>
        <AsideView />
      </Provider>,
    );

    wrapper.find(Button).at(0).simulate('click');
    expect(store.getActions()).toEqual([toggleForm(issues[0])]);
  });

  it('should dispatch update & toggle issue action', () => {
    const store = mockStore({
      issues: issueState,
      asideView: {...asideViewState, isShowForm: true, isShowIssue: false},
    } as RootReducerState);

    const wrapper = mount(
      <Provider store={store}>
        <AsideView />
      </Provider>,
    );

    wrapper.find(Button).at(0).simulate('click');
    expect(store.getActions()).toEqual([updateIssue(issues[0]), toggleIssue(issues[0])]);
  });
});
