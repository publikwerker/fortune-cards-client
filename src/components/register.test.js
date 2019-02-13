import React from 'react';
import { shallow } from 'enzyme';

import Register from './register.js';

describe('<Register />', () => {
  it('Renders without crashing', () => {
    shallow(<Register />);
  });

  it('Should have class: register-container', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.hasClass('register-container'));
  });
});