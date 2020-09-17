import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IssueItem from '.';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'issue', type: 'interface Issue', description: 'Issue to display' },
  ],
});

const [issue] = JsonToIssueList(issueListJson);

storiesOf('Issue Item', module).add(
  'Issue',
  (): JSX.Element => (
    <>
      <h3>Default Item</h3>
      <PreviewArea>
        <IssueItem
          issue={issue}
          onToggleContent={action('toggle')}
          onToggleLock={action('toggle lock')}
        />
      </PreviewArea>
      <Code>
        {`
          <IssueItem issue={issue} onToggleContent={action('toggle')} onToggleLock={action('toggle lock')} />
        `}
      </Code>
      {propsDetail}
    </>
  ),
);
