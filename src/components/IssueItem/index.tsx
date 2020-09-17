import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

import * as color from '../../theme/color';
import * as metrics from '../../theme/metrics';
import * as localize from '../../constants/localize';
import { isEqualAllProps } from '../../helpers/propsHelper';
import {
  IssueProps,
  ButtonType,
} from '../../types';

// Main container
const IssueWrapper = styled.div<{isLocked: boolean}>`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  justify-content: space-between;
  background: ${(props) => (props.isLocked ? color.ISSUE_BG_LOCKED : color.ISSUE_BG_DEFAULT)};

  :hover {
    opacity: ${metrics.OPACITY.hover};
    box-shadow: 2px 1px 2px 1px ${color.SHADOW_BORDER};
  }

  :before {
    content: ${(props) => (props.isLocked ? '"🔒"' : '"🔓"')};
    padding: 7px 0 10px 5px;
    font-size: ${metrics.FontSize.Icon};
  }
`;

// Display Id in github of issue. On left - middle
const IssueID = styled.div`
  font-weight: 600;
  text-align: center;
  padding: 10px 20px 10px 0px;
  min-width: 30px;
`;

// Wrap title & date. Export for test
export const TitleWrapper = styled.div`
  flex-grow: 1;
  :hover {
    cursor: pointer;
  }
`;

// Big issue title
export const IssueTitle = styled.a`
  font-weight: 700;
  display: block;
`;

// Edited/create date under the title.
const EditTime = styled.span`
  display: block;
  color: ${color.SMALL_TEXT_COLOR};
  font-size: ${metrics.FontSize.Small};
  margin-top: 4px;
  line-height: 1.25;
`;

const IssueItem = ({
  issue,
  onToggleContent,
  onToggleLock,
}: IssueProps): JSX.Element => (
  <IssueWrapper isLocked={issue.locked}>
    {/* Issue number is id of issue in user's storage list */}
    <IssueID>#{issue.number}</IssueID>

    {/* Body of issue item */}
    <TitleWrapper onClick={() => { onToggleContent(issue); }}>
      <IssueTitle>{issue.title}</IssueTitle>
      <EditTime>
        {
          // Compare edit/create timestamp
          new Date(issue.createdAt).getTime() === new Date(issue.updatedAt).getTime()
            ? localize.en.ISSUE_CREATED_AT
            : localize.en.ISSUE_UPDATED_AT
        }
        { new Date(issue.updatedAt).toLocaleDateString() }
      </EditTime>
    </TitleWrapper>
    {
      <Button
        type={issue.locked ? ButtonType.Primary : ButtonType.Default}
        onClick={() => { onToggleLock(issue); }}
        value={issue.locked ? localize.en.BTN_ISSUE_UNLOCK : localize.en.BTN_ISSUE_LOCK}
      />
    }
  </IssueWrapper>
);

export default React.memo(IssueItem, isEqualAllProps);
