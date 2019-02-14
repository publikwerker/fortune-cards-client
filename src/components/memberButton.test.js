import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import { MemberButton } from './memberButton.js';
import { toggle_login, open_history } from '../actions/index.js';

describe('<MemberButton />', () => {
  it('Renders without crashing', () => {
    shallow(<MemberButton />);
  });

  it('Should have class: header-link without currentUser', () => {
    const wrapper = shallow(<MemberButton />);
    expect(wrapper.hasClass('header-link')).toEqual(true);
  });

  it('Should have class: header-link with currentUser', () => {
    const currentUser = 'bob';
    const wrapper = shallow(<MemberButton currentUser={currentUser} />);
    expect(wrapper.hasClass('header-link')).toEqual(true);
  });

  it('Should fire callback dispatch', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<MemberButton dispatch={dispatch}/>);
    wrapper.find('button').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it('Dispatches the open_history action', () => {
    const currentUser =  'bob';
    const dispatch = jest.fn();
    const wrapper = mount(<MemberButton currentUser ={currentUser} dispatch={dispatch} />);

    wrapper.find('#custom-button').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(open_history());
  });

  it('Should call toggle_login action when button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<MemberButton dispatch={dispatch}/>);
    wrapper.find('#member-login-button').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggle_login());
  });
});