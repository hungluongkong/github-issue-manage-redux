import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import InputGroup from '../InputGroup';
import * as localize from '../../constants/localize';

import {
  Issue,
  ButtonType,
  InputType,
  IssueFormProps,
} from '../../types';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  align-items: end;
`;

const IssueForm = ({
  issue = {
    title: '',
    body: '',
  } as Issue,
  onSubmit = () => {},
}: IssueFormProps): JSX.Element => {
  // TextArea (issue body) ref
  const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitEvent = (): void => {
    // Github require title for issue.
    if (titleRef.current && !titleRef.current?.value) {
      alert(localize.en.WARN_EMPTY_TITLE);
      return;
    }

    onSubmit(
      {
        ...issue,
        title: titleRef.current?.value,
        body: textAreaRef.current?.value || '',
      } as Issue,
    );
  };

  return (
    <StyledForm>
      <InputGroup
        label={localize.en.FORM_TITLE}
        defaultValue={issue.title || ''}
        placeholder={localize.en.FORM_TITLE_PLACEHOLDER}
        textRef={titleRef}
      />
      <InputGroup
        label={localize.en.FORM_CONTENT_TITLE}
        defaultValue={issue.body || ''}
        textRef={textAreaRef}
        placeholder={localize.en.FORM_CONTENT_PLACEHOLDER}
        inputType={InputType.TextArea}
      />
      <Button type={ButtonType.Primary} onClick={onSubmitEvent} value={localize.en.BTN_SUBMIT} />
    </StyledForm>
  );
};

export default IssueForm;
