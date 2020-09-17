import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Button from '../Button';

import * as color from './../../theme/color';

describe('Unit test for Button component', () => {
  it('snapshot', () => {
    const buttonComponent = renderer.create(<Button value="Button" />);
    expect(buttonComponent).toMatchSnapshot();
  });

  it('simulate click event', () => {
    const mockClick = jest.fn();
    const button = shallow(<Button onClick={mockClick} value="Button" />);

    button.simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
