import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';
import { PreviewArea, Code, DetailTable } from '../commonStyled';
import { ButtonType, ButtonSize } from '../../types';

// Detail of props
const propsDetail: JSX.Element = DetailTable({
  data: [
    {
      name: 'type',
      type: 'enum ButtonType { Default, Primary }',
      default: 'ButtonType.Primary',
    },
    {
      name: 'size',
      type: 'enum ButtonSize { Small, Normal }',
      default: 'ButtonSize.Normal',
    },
    { name: 'value', type: 'string', default: 'ButtonType.Primary' },
    {
      name: 'onClicked',
      type: 'function',
      description:
        '((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)',
    },
  ],
});

storiesOf('Button', module)
  .addDecorator((story) => <div style={{ margin: '0 30px' }}>{story()}</div>)
  .add('Button Style', () => (
    <>
      <h3>Button Types</h3>
      <PreviewArea>
        <Button
          type={ButtonType.Primary}
          onClick={action('click')}
          value="Primary Button"
        />
        <Button
          type={ButtonType.Default}
          onClick={action('click')}
          value="Default Button"
        />
      </PreviewArea>
      <Code>
        {`
          <Button type={ButtonType.Primary} onClick={action('click')}>Primary Button</Button>
          <Button type={ButtonType.Default} onClick={action('click')}>Default Button</Button>
        `}
      </Code>
      {propsDetail}
    </>
  ))
  .add('Button Size', () => (
    <>
      <h3>Button Size</h3>
      <PreviewArea>
        <Button
          onClick={action('click')}
          size={ButtonSize.Normal}
          value="Normal Button"
        />
        <Button
          onClick={action('click')}
          size={ButtonSize.Small}
          value="Small Button"
        />
      </PreviewArea>
      <Code>
        {`
          <Button onClick={action('click')} size={ButtonSize.Normal}>Normal Button</Button>
          <Button onClick={action('click')} size={ButtonSize.Small}>Small Button</Button>
        `}
      </Code>
      {propsDetail}
    </>
  ));
