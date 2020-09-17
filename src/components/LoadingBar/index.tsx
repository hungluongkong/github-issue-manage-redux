import * as React from 'react';

import styled, { keyframes } from 'styled-components';
import * as color from '../../theme/color';

const loadingKeyFrame = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const LoadBar = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const LoadingBlock = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${color.LOADING_BAR_COLOR};
  animation: ${loadingKeyFrame} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  :nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  :nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  :nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;

const LoadingBar = (): JSX.Element => (
  <LoadingWrapper>
    <LoadBar>
      {/* Three loading box effect */}
      <LoadingBlock />
      <LoadingBlock />
      <LoadingBlock />
    </LoadBar>
  </LoadingWrapper>
);

export default LoadingBar;
