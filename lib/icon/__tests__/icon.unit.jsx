import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import { mount } from 'enzyme';

describe('icon', () => {
  it('icon render successfully', () => {
    const json = renderer.create(<Icon/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="qq" onClick={fn}/>);
    component.find('svg').simulate('click');
  });
})