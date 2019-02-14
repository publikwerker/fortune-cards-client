import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import {LoginWindow} from './login.js';

describe('<LoginWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  it('Should have class: login-container', () => {
    const wrapper = mount(<LoginWindow login={true}/>);
    console.log(wrapper.debug());
    expect(wrapper.find('div').hasClass('login-container')).to.equal(true);
  });
  
 it('setSignUp should change state', () => {
    const wrapper = shallow(<LoginWindow />);
    wrapper.instance().setSignUp(true);
    expect(wrapper.state('tarot.signUp')).toEqual(true);
  })

  it('Should render register form when signing up', () => {
    const login = true;
    const wrapper = mount(<LoginWindow login={login}/>);
    wrapper.instance().setSignUp(true);
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.hasClass('register-containers')).toEqual(true);
  });
});