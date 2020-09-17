import React, { useRef } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from '../Input';

describe('Unit test for Input component', () => {
  it('snapshot', () => {
    const input = renderer.create(<Input />);
    expect(input).toMatchSnapshot();
  });

  it('render Default value', () => {
    const defaultValue = 'Test text';
    const placeholderText = 'Place holder text';
    const input = shallow(
      <Input defaultValue={defaultValue} placeholder={placeholderText} />,
    );
    expect(input.prop('defaultValue')).toEqual(defaultValue);
    expect(input.prop('placeholder')).toEqual(placeholderText);
  });

  it('simulate on change', () => {
    const defaultValue = 'Default text';
    const newValue = 'Changed text';
    const onChange = jest.fn();

    const input = mount(
      <Input defaultValue={defaultValue} onChange={onChange} />,
    );

    input.simulate('change', { target: { value: newValue } });

    expect(onChange).toBeCalledWith(newValue);
  });
});
