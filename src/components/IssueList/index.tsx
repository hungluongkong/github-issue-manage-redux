/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import IssueItem from '../IssueItem';
import LoadingBar from '../LoadingBar';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../Button';
import TaskReporter from '../TaskReporter';

import { isEqualAllProps } from '../../helpers/propsHelper';

import * as color from '../../theme/color';
import * as metrics from '../../theme/metrics';
import * as localize from '../../constants/localize';
import {
  Issue,
  IssueListProps,
  ButtonType,
} from '../../types';

// Wrap all content
const IssueListWrapper = styled.div`
  background: ${color.ISSUE_LIST_BG};
`;

// Heading style
const ListHeading = styled.div`
  background: ${color.ISSUE_LIST_HEAD_BG};
  text-align: center;
  font-size: ${metrics.FontSize.Title};
`;

const IssueList = ({
  lastTaskTime,
  isShowForm,
  getIssues,
  toggleForm,
  toggleIssue,
  toggleLockIssue,
  loading = false,
  issues = [],
  task = '',
}: IssueListProps): JSX.Element => {
  // Fetch issues on start
  useEffect(() => {
    if (issues.length === 0) {
      getIssues();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ErrorBoundary>
      <TaskReporter
        content={task}
        timeoutMS={metrics.POPUP_TIMEOUT}
        date={lastTaskTime}
      />
      <Button
        type={ButtonType.Primary}
        value={isShowForm ? localize.en.BTN_FORM_CLOSE : localize.en.BTN_ISSUE_ADD}
        onClick={() => {
          toggleForm();
        }}
      />
      <ListHeading>Issues</ListHeading>
      <IssueListWrapper>
        {
          // If loading or Empty list
          loading || issues.length === 0 ?
            (
              loading ? <LoadingBar /> : localize.en.ISSUE_LIST_NO_ISSUE
            )
            :
            // List render
            (
              issues.map((issue: Issue): JSX.Element => (
                <IssueItem
                  key={issue.id}
                  issue={issue}
                  onToggleContent={toggleIssue}
                  onToggleLock={toggleLockIssue}
                />
              ))
            )
        }
      </IssueListWrapper>
    </ErrorBoundary>);
};

export default React.memo(IssueList, isEqualAllProps);
