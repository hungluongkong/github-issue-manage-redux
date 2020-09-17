import React from 'react';
import styled from 'styled-components';
import IssueContent from '../IssueContent';
import IssueForm from '../Form';
import { Issue, AsideViewProps } from '../../types';
import { isEqualAllProps } from '../../helpers/propsHelper';

const IssueViewWrapper = styled.div`
  width: 40%;
`;

const AsideView = ({
  isShowIssue,
  isShowForm,
  issue,
  updateIssue,
  toggleIssue,
  toggleForm,
}: AsideViewProps) => (
  // Only show if it have show form or issue content
  isShowIssue || isShowForm ?
    <IssueViewWrapper>
      {
      // Show form (Edit)
        isShowIssue ?
          (
            issue && issue.id &&
            <IssueContent
              issue={issue}
              onEditPressed={() => {
                toggleForm(issue);
              }}
            />
          )
          :
          (
            <IssueForm
              issue={issue}
              onSubmit={(issue: Issue) => {
                updateIssue(issue);
                toggleIssue(issue);
              }}
            />
          )
      }
    </IssueViewWrapper>
    :
    // Show nothing
    <React.Fragment />
);

export default React.memo(AsideView, isEqualAllProps);
