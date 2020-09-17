import React from 'react';
import styled from 'styled-components';
import TextArea from '../TextArea';
import Input from '../Input';
import { InputGroupProps, InputType } from '../../types';

const Label = styled.label`
  font-weight: 600;
  display: inline-block;
  padding: 0 15px;
  width: 100px;
`;

const InputGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const InputWrapper = styled.div<{ isTextArea: boolean }>`
  min-height: ${(props) => (props.isTextArea ? 200 : 0)}px;
  flex-grow: 1;
  line-height: 20px;
  box-sizing: border-box;
`;

const InputGroup = ({
  defaultValue,
  label = '',
  inputType = InputType.Input,
  placeholder = '',
  isRequire = false,
  textRef = React.createRef<HTMLTextAreaElement | HTMLInputElement>(),
}: InputGroupProps): JSX.Element => {
  const InputElement = inputType === InputType.Input ? Input : TextArea;

  return (
    <InputGroupWrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper isTextArea={inputType === InputType.TextArea}>
        <InputElement
          textRef={textRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isRequire={isRequire}
        />
      </InputWrapper>
    </InputGroupWrapper>
  );
};

export default InputGroup;
