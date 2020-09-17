import React from 'react';
import LoadingBar from '.';
import { storiesOf } from '@storybook/react';
import { PreviewArea, Code } from '../commonStyled';

storiesOf('Loading Bar', module)
  .add('Default', (): JSX.Element => (
    <>
      <h3>Loading Bar</h3>
      <PreviewArea>
        <LoadingBar />
      </PreviewArea>
      <Code>
        {`
          <LoadingBar />
        `}
      </Code>
    </>
  ));
