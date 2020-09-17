import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '.';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'defaultValue', type: 'String' },
    { name: 'placeholder', type: 'String' },
    { name: 'isRequire', type: 'boolean', default: 'false' },
    { name: 'textRef', type: 'React.RefObject<HTMLTextAreaElement>' },
  ],
});

storiesOf('TextArea', module).add('Default', () => (
  <>
    <h3>Default TextArea</h3>
    <PreviewArea>
      <TextArea defaultValue="default text" placeholder="Your input here" />
    </PreviewArea>
    <Code>
      {`
          <TextArea
            defaultValue="default text"
            placeholder="Type your input here"
            textRef={ref}
          />
        `}
    </Code>
    {propsDetail}
  </>
));
