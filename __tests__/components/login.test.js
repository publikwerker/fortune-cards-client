import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setup/setupTests';
import {LoginWindow} from '../../src/components/login.js';
import { toggle_signin, toggle_login } from '../../src/actions/index.js';
import { Login } from '../../src/actions/protected.js';

describe('<LoginWindow />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  it.skip('Should call Login when button is clicked', () => {
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