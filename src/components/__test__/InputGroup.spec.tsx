import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import InputGroup from '../InputGroup';

describe('Unit test for Input component', () => {
  it('snapshot', () => {
    const input = create(<InputGroup defaultValue="text" />);
    expect(input).toMatchSnapshot();
  });

  it('should render label', () => {
    const label = 'Title';
    const input = mount(<InputGroup defaultValue="text" label={label} />);
    expect(input.text()).toEqual(label);
  });

  it('should not render label', () => {
    const input = mount(<InputGroup defaultValue="text" />);
    expect(input.text()).toEqual('');
  });
});
