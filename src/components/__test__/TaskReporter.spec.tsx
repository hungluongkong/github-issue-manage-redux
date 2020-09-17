import React from 'react';
import { create } from 'react-test-renderer';
import TaskReporter from '../TaskReporter';

describe('Unit test for IssueList component', () => {
  it('snapshot', () => {
    const issueList = create(<TaskReporter content="task" date={new Date()} />);
    expect(issueList).toMatchSnapshot();
  });
});
