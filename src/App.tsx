import React from 'react';
import styled from 'styled-components';

// Components
import IssueList from './containers/IssueList';
import ErrorBoundary from './components/ErrorBoundary';
import AsideView from './containers/AsideView';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const IssueListWrapper = styled.div`
  flex-grow: 1;
`;

const App: React.SFC<{}> = () => (
  <ErrorBoundary>
    <MainWrapper>
      <IssueListWrapper>
        <IssueList />
      </IssueListWrapper>
      <AsideView />
    </MainWrapper>
  </ErrorBoundary>
);

export default App;
