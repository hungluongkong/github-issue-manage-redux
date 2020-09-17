/* -------------------------------------------- */
/*     Display all issue info for one Issue     */
/* -------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
// import { Marked } from '@ts-stack/markdown';

import Button from '../Button';

import * as localize from '../../constants/localize';
import * as color from '../../theme/color';
import { ButtonType, IssueContentProps } from '../../types';

const ContentContainer = styled.div`
  padding: 5px;
  border-radius: 3px;
  background-color: ${color.ISSUE_BG_CONTENT};
`;

const Title = styled.div`
  padding: 10px 0 0 10px;
  font-weight: 700;
  display: block;
  box-shadow: 2px 1px 2px 1px ${color.SHADOW_BORDER};
`;

// Body of content. Contain edit item.
const IssueContentBody = styled.div`
  padding: 10px 0 0 10px;
`;

// Footer of content. Contain edit item.
const IssueContentFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const IssueContent = ({
  issue,
  onEditPressed,
}: IssueContentProps) => (
  issue.id ?
    <ContentContainer>
      <Title>{issue.title}</Title>
      <IssueContentBody dangerouslySetInnerHTML={{__html: (issue.body)}} />
      <IssueContentFooter>
        <Button
          type={ButtonType.Default}
          onClick={onEditPressed}
          value={localize.en.BTN_ISSUE_EDIT}
        />
      </IssueContentFooter>
    </ContentContainer>
    :
    // Render nothing
    <React.Fragment />
);

export default IssueContent;
