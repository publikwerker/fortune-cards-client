import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import {LoginWindow} from './login.js';
import { toggle_signin, toggle_login } from '../actions/index.js';

describe('<LoginWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  // it('Should call toggle_login when button is clicked', () => {
  //   const login = true;
  //   const dispatch = jest.fn();
  //   const wrapper = mount(<LoginWindow login={login} dispatch={dispatch}/>);
  //   wrapper.find('#login-button').simulate('click');
  //   expect(dispatch).toHaveBeenCalledWith(toggle_login());
  // });
});