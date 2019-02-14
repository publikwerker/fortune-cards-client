import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import { MemberButton } from './memberButton.js';

describe('<MemberButton />', () => {
  it('Renders without crashing', () => {
    shallow(<MemberButton />);
  });

  it('Should have class: header-link', () => {
    const wrapper = shallow(<MemberButton />);
    expect(wrapper.hasClass('header-link'));
  });

  it('Should fire callback dispatch', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<MemberButton dispatch={dispatch}/>);
    wrapper.find('button').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it('Should change state to login: true', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<MemberButton dispatch={dispatch}/>);
    console.log(wrapper.debug());
    wrapper.find('button').simulate('click');
    expect(wrapper.state('tarot.login')).toEqual(true);
  });
});