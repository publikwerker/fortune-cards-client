import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import {LoginWindow} from './login.js';

describe('<LoginWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  it('Should have class: login-container', () => {
    const wrapper = shallow(<LoginWindow login={true}/>);
    expect(wrapper.hasClass('login-container')).toEqual(true);
  });
  
 it('setSignUp should change state', () => {
    const wrapper = shallow(<LoginWindow />);
    wrapper.instance().setSignUp(true);
    expect(wrapper.state('signUp')).toEqual(true);
  })

  it('Should render register form when signing up', () => {
    const wrapper = shallow(<LoginWindow login={true}/>);
    wrapper.instance().setSignUp(true);
    //wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.hasClass('register-containers')).toEqual(true);
  });

  it('Should set state intitially to signup: false', () => {
    const wrapper = shallow(<LoginWindow />);
    expect(wrapper.state('signUp')).toEqual(false);
  })

  it('Should render props correctly', () => {
    const wrapper = shallow(<LoginWindow />);
   
  })
});