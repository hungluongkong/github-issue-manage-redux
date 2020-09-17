import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PreviewArea, Code, DetailTable } from '../commonStyled';
import AsideView from '.';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'isShowForm', type: 'boolean' },
    { name: 'isShowIssue', type: 'boolean' },
    { name: 'issue', type: 'Issue', description: 'keep empty for empty form' },
    { name: 'toggleForm', type: 'function' },
    { name: 'toggleIssue', type: 'function' },
    { name: 'updateIssue', type: 'function' },
  ],
});

const [issue] = JsonToIssueList(issueListJson);

storiesOf('Aside View', module)
  .addDecorator((story) => <div style={{ margin: '0 30px' }}>{story()}</div>)
  .add('With Form', () => (
    <>
      <h3>With Form</h3>
      <PreviewArea>
        <AsideView
          isShowForm
          isShowIssue={false}
          issue={issue}
          toggleForm={action('toggle form')}
          toggleIssue={action('toggle Issue')}
          updateIssue={action('update Issue')}
        />
      </PreviewArea>
      <Code>
        {`
          <AsideView
            isShowForm
            isShowIssue={false}
            issue={issue}
            toggleForm={action('toggle form')}
            toggleIssue={action('toggle Issue')}
            updateIssue={action('update Issue')}
          />
        `}
      </Code>
      {propsDetail}
    </>
  ))
  .add('With Issue', () => (
    <>
      <h3>With Issue</h3>
      <PreviewArea>
        <AsideView
          isShowForm={false}
          isShowIssue
          issue={issue}
          toggleForm={action('toggle form')}
          toggleIssue={action('toggle Issue')}
          updateIssue={action('update Issue')}
        />
      </PreviewArea>
      <Code>
        {`
          <AsideView
            isShowForm={false}
            isShowIssue
            issue={issue}
            toggleForm={action('toggle form')}
            toggleIssue={action('toggle Issue')}
            updateIssue={action('update Issue')}
          />
        `}
      </Code>
      {propsDetail}
    </>
  ));
