import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import ReadingHistory from './readingHistory';

describe('<ReadingHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<ReadingHistory />);
  });

  it('Should have class: history-container', () => {
    const wrapper = shallow(<ReadingHistory />);
    expect(wrapper.hasClass("history-container"));
  });
});