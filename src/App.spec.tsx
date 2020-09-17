import * as React from 'react';
import { isEqualAllProps } from './helpers/propsHelper';

describe('props Helper test', () => {
  it('should be same', () => {
    const someState = {
      isShowForm: true,
      isShowIssue: false,
      date: new Date(),
      string: 'abc',
    };

    const otherState = { ...someState, name: 'Alisa' };

    expect(isEqualAllProps(someState, someState)).toEqual(true);
    expect(isEqualAllProps(someState, otherState)).toEqual(false);
  });
});
