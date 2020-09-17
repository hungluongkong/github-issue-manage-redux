import React from 'react';
import { create } from 'react-test-renderer';
import LoadingBar from '../LoadingBar';

describe('Unit test for LoadingBar component', () => {
  it('snapshot', () => {
    const loadingBar = create(<LoadingBar />);
    expect(loadingBar).toMatchSnapshot();
  });
});
