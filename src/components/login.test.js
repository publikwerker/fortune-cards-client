import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import {LoginWindow} from './login.js';
import { toggle_signin, toggle_login } from '../actions/index.js';
import { Login } from '../actions/protected.js';

describe('<LoginWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  it('Should call Login when button is clicked', () => {
    const login = true;
    const signIn = false;
    const dispatch = jest.fn();
    const wrapper = mount(<LoginWindow 
      login={login} 
      dispatch={dispatch} 
      signIn={signIn} />);
    wrapper.find('#login-button').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(Login);
  });
});