import React from 'react';
import styled from 'styled-components';

import * as color from '../../theme/color';
import { InputProps } from '../../types';

const InputStyled = styled.input`
  padding: 5px 12px;
  background-color: ${color.INPUT_BG_COLOR};
  line-height: 20px;
  border: 1px solid ${color.INPUT_BORDER_COLOR};
  border-radius: 6px;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;

  :focus {
    box-shadow: 1px 1px 1px 1px ${color.SHADOW_BORDER};
  }
`;

const Input = ({
  defaultValue = '',
  isRequire = false,
  placeholder = '',
  textRef,
  onChange = () => {},
}: InputProps): JSX.Element => (
  <InputStyled
    placeholder={placeholder}
    defaultValue={defaultValue}
    ref={textRef as React.RefObject<HTMLInputElement>}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value)
    }
    required={isRequire}
  />
);

export default Input;
