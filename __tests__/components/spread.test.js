import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Spread from '../../src/components/spread.js';

describe('<Spread />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<Spread />);
  });

  it('Should have class: reading__display', () => {
    const wrapper = shallow(<Spread />);
    expect(wrapper.hasClass('reading__display'));
  });
});