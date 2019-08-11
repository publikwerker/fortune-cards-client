import React from 'react';
import { shallow } from 'enzyme';
// import '../setup/setupTests';
import Spread from '../../src/components/spread.js';

describe('<Spread />', () => {
  it('Renders without crashing', () => {
    shallow(<Spread />);
  });

  it('Should have class: reading-display', () => {
    const wrapper = shallow(<Spread />);
    expect(wrapper.hasClass('reading-display'));
  });
});