import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import { MemberButton } from './memberButton.js';

describe('<MemberButton />', () => {
  it('Renders without crashing', () => {
    shallow(<MemberButton />);
  });

  it('Should have class: header-link', () => {
    const wrapper = shallow(<MemberButton />).dive().find('button');
    console.log(wrapper.debug());
    expect(wrapper.hasClass('header-link'));
  });

  it('Should change login state to true when clicked', () => {
    const wrapper = mount(<MemberButton />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('login')).toEqual(true);
  })
});