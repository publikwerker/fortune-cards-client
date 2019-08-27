import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import ReadingHistory from '../../src/components/readingHistory';

describe('<ReadingHistory />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<ReadingHistory />);
  });

  it('Should have class: history-container', () => {
    const wrapper = shallow(<ReadingHistory />);
    expect(wrapper.hasClass("history-container"));
  });
});