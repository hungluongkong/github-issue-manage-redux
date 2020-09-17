import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IssueForm from '.';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    {
      name: 'onSubmit',
      type: 'function',
      isRequired: true,
      description: '(issue: Issue) => void',
    },
    {
      name: 'issue',
      type: 'interface Issue',
      description: 'Issue to bind to form. Null for empty form',
    },
  ],
});

storiesOf('Form', module).add(
  'Default Form',
  (): JSX.Element => (
    <>
      <h3>Default Form</h3>
      <PreviewArea>
        <IssueForm onSubmit={action('Submit')} />
      </PreviewArea>
      <Code>
        {`
          <IssueForm onSubmit={action('Submit')} />
        `}
      </Code>
      {propsDetail}
    </>
  ),
);
