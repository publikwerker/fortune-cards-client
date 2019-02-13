import React from 'react';
import { shallow } from 'enzyme';

import MemberButton from './memberButton.js';

describe('<MemberButton />', () => {
  it('Renders without crashing', () => {
    shallow(<MemberButton />);
  });

  it('Should have class: header-link', () => {
    const wrapper = shallow(<MemberButton />);
    expect(wrapper.hasClass('header-link'));
  });
});