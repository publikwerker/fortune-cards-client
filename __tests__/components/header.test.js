import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import {Header} from '../../src/components/header.js';

describe('<Header />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Should have class: header-container', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header-container')).toEqual(true);
  });
  
});