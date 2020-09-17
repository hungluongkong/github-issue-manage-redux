import React from 'react';
import { storiesOf } from '@storybook/react';
import InputGroup from '.';
import { InputType } from '../../types';
import { PreviewArea, Code, DetailTable } from '../commonStyled';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    { name: 'label', type: 'string' },
    { name: 'defaultValue', type: 'string' },
    { name: 'placeholder', type: 'string' },
    { name: 'isRequire', type: 'boolean', default: 'false' },
    { name: 'textRef', type: 'React.RefObject<HTMLInputElement | HTMLTextAreaElement>' },
  ],
});

storiesOf('Input Group', module)
  .add('Input Group Types', () => (
    <>
      <h3>Input Group Types</h3>
      <p>Input and TextArea</p>
      <PreviewArea>
        <InputGroup
          label="Title"
          defaultValue="default text"
          placeholder="Your input here"
          inputType={InputType.Input}
          isRequire
        />
        <InputGroup
          label="Title"
          defaultValue="default text"
          placeholder="Your input here"
          inputType={InputType.TextArea}
        />
      </PreviewArea>
      <Code>
        {`
          <InputGroup
            label="Title"
            defaultValue="default text"
            placeholder="Your input here"
            inputType={InputType.Input}
            isRequire={true}
          />
          <InputGroup
            label="Title"
            defaultValue="default text"
            placeholder="Your input here"
            inputType={InputType.TextArea}
          />
        `}
      </Code>
      {propsDetail}
    </>
  ))
  .add('Input Group Label', () => (
    <>
      <h3>Input Group Label</h3>
      <p>Input with/without Label</p>
      <PreviewArea>
        <InputGroup
          defaultValue="Without Label"
          placeholder="Your input here"
          inputType={InputType.Input}
        />
        <InputGroup
          label="Title"
          defaultValue="With Label"
          placeholder="Your input here"
          inputType={InputType.Input}
        />
      </PreviewArea>
      <Code>
        {`
          <InputGroup
            defaultValue="Without Label"
            placeholder="Your input here"
            inputType={InputType.Input}
          />
          <InputGroup
            label="Title"
            defaultValue="With Label"
            placeholder="Your input here"
            inputType={InputType.Input}
          />
        `}
      </Code>
      {propsDetail}
    </>
  ));
