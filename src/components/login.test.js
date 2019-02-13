import React from 'react';
import { shallow } from 'enzyme';

import {LoginWindow} from './login.js';

describe('<LoginWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginWindow />);
  });

  it('Should have class: login-container', () => {
    const wrapper = shallow(<LoginWindow />);
    expect(wrapper.hasClass('login-container'));
  });

  it('Should render register form when signing up', () => {
    const wrapper = shallow(<LoginWindow />);
    wrapper.instance().setSignUp(true);
    wrapper.update();
    expect(wrapper.hasClass('register-container'));
  });
});