import React from 'react';
import { shallow } from 'enzyme';

import Query from './query';

describe('<Query />', () => {
  it('Renders without crashing', () => {
    shallow(<Query />);
  });

  it('Should have class: query-container', () => {
    const wrapper = shallow(<Query />);
    expect(wrapper.hasClass('query-container'));
  });
});