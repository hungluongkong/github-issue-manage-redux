import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IssueList from '.';

import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    {
      name: 'issues',
      type: 'Array of Issue',
      description: 'Issue list to display',
    },
    { name: 'loading', type: 'boolean', description: 'is List still loading' },
  ],
});

const issues = JsonToIssueList(issueListJson);

storiesOf('Issue List', module)
  .add(
    'Default',
    (): JSX.Element => (
      <>
        <h3>Default List</h3>
        <PreviewArea>
          <IssueList
            issues={issues}
            isShowForm={false}
            task=""
            lastTaskTime={new Date()}
            toggleForm={action('toggle Form')}
            getIssues={action('get')}
            toggleIssue={action('toggle Issue')}
            toggleLockIssue={action('lock/unlock an issue')}
          />
        </PreviewArea>
        <Code>
          {`
          <IssueList
            issues={issues}
            isShowForm={false}
            task=""
            lastTaskTime={new Date()}
            toggleForm={action('toggle')}
            getIssues={action('get')}
            toggleLockIssue={action('lock/unlock an issue')}
          />
        `}
        </Code>
        {propsDetail}
      </>
    ),
  )
  .add(
    'Loading',
    (): JSX.Element => (
      <>
        <h3>Loading List</h3>
        <PreviewArea>
          <IssueList
            loading
            issues={issues}
            isShowForm={false}
            task=""
            lastTaskTime={new Date()}
            getIssues={action('get')}
            toggleForm={action('toggle')}
            toggleIssue={action('toggle Issue')}
            toggleLockIssue={action('lock/unlock an issue')}
          />
        </PreviewArea>
        <Code>
          {`
          <IssueList
            loading
            issues={issues}
            isShowForm={false}
            task=""
            lastTaskTime={new Date()}
            getIssues={action('get')}
            toggleForm={action('toggle')}
            toggleLockIssue={action('lock/unlock an issue')}
          />
        `}
        </Code>
        {propsDetail}
      </>
    ),
  );
