import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TextArea from '../TextArea';

describe('Unit test for TextArea component', () => {
  it('snapshot', () => {
    const textArea = create(<TextArea />);
    expect(textArea).toMatchSnapshot();
  });

  it('render Default value', () => {
    const defaultValue = 'Test text';
    const textArea = shallow(<TextArea defaultValue={defaultValue} />);
    expect(textArea.prop('defaultValue')).toEqual(defaultValue);
  });

  it('simulate on change', () => {
    const defaultValue = 'Default text';
    const newValue = 'Changed text';
    const onChange = jest.fn();

    const input = mount(<TextArea defaultValue={defaultValue} onChange={onChange} />);

    input.simulate('change', { target: { value: newValue } });

    expect(onChange).toBeCalledWith(newValue);
  });
});
