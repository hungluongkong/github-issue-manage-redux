import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../../types';
import * as color from '../../theme/color';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 5px 12px;
  resize: vertical;
  flex-grow: 1;
  background-color: ${color.INPUT_BG_COLOR};
  line-height: 20px;
  border: 1px solid ${color.INPUT_BORDER_COLOR};
  border-radius: 6px;
  box-sizing: border-box;

  :focus {
    box-shadow: 1px 1px 1px 1px ${color.SHADOW_BORDER};
  }
`;

const TextArea = ({
  textRef,
  defaultValue = '',
  isRequire = false,
  onChange = () => {},
}: InputProps): JSX.Element => (
  <StyledTextArea
    ref={textRef as React.RefObject<HTMLTextAreaElement>}
    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
    defaultValue={defaultValue}
    required={isRequire}
  />
);

TextArea.defaultProps = {
  isRequire: false,
};

export default TextArea;
