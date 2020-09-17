import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'defaultValue', type: 'String' },
    { name: 'placeholder', type: 'String' },
    { name: 'isRequire', type: 'boolean', default: 'false' },
    { name: 'textRef', type: 'React.RefObject<HTMLInputElement>' },
  ],
});

storiesOf('Input', module)
  .add('Default', () => (
    <>
      <h3>Default Input</h3>
      <PreviewArea>
        <Input defaultValue="Text" placeholder="Input here" />
      </PreviewArea>
      <Code>
        {`
          <Input defaultValue="Text" placeholder="Input here" />
        `}
      </Code>
      {propsDetail}
    </>
  ));
