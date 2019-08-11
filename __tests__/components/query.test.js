import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Query from '../../src/components/query';

describe('<Query />', () => {
  it('Renders without crashing', () => {
    shallow(<Query />);
  });

  it('Should have class: query-container', () => {
    const wrapper = shallow(<Query />);
    expect(wrapper.hasClass('query-container'));
  });


});