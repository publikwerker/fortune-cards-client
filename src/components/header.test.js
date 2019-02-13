import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Header from './header.js';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Should have class: header-container', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header-container'));
  });
});