import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { JsonToIssueList } from '../../helpers/jsonHelper';
import { issueListJson } from '../../constants/storiesTempData';
import { PreviewArea, Code, DetailTable } from '../commonStyled';
import IssueContent from '.';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [{ name: 'issue', type: 'interface Issue' }],
});

const [issue] = JsonToIssueList(issueListJson);

storiesOf('Issue Content', module).add(
  'Default',
  (): JSX.Element => (
    <>
      <h3>Default Item</h3>
      <PreviewArea>
        <IssueContent issue={issue} onEditPressed={action('Edit pressed')} />
      </PreviewArea>
      <Code>
        {`
          <IssueContent issue={issue} />
        `}
      </Code>
      {propsDetail}
    </>
  ),
);
