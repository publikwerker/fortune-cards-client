import React from 'react';
import { shallow } from 'enzyme';

import Spread from './spread.js';
import { isTrimmed } from '../validators.js';

describe('<Spread />', () => {
  it('Renders without crashing', () => {
    shallow(<Spread />);
  });

  it('Should have class: reading-display', () => {
    const wrapper = shallow(<Spread />);
    expect(wrapper.hasClass('reading-display'));
  });
});