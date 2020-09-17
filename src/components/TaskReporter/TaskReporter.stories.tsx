import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import TaskReporter from '.';

import { TaskReportType } from '../../types';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'type', type: 'TaskReportType', default: 'TaskReportType.Success' },
    { name: 'content', type: 'string' },
  ],
});

const PopupWrapper = styled.div`
  * {
    position: static;
  }
`;

storiesOf('Task Reporter', module)
  .add('Task Reporter Types', () => (
    <>
      <h3>Task Reporter Types</h3>
      <PreviewArea >
        <PopupWrapper>
          <TaskReporter type={TaskReportType.Success} content="Success! Hide After 2 seconds" timeoutMS={2000} date={new Date()} />
          <TaskReporter type={TaskReportType.Warning} content="Warning! Hide after 1 second" timeoutMS={1000} date={new Date()} />
        </PopupWrapper>
      </PreviewArea>
      <Code>
        {`
          <TaskReporter type={TaskReportType.Success} content="Success! Hide After 2 seconds" timeoutMS={2000} date={new Date()} />
          <TaskReporter type={TaskReportType.Warning} content="Warning! Hide after 1 second" timeoutMS={1000} date={new Date()} />
        `}
      </Code>
      {propsDetail}
    </>
  ));
