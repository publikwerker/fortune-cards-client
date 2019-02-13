import React from 'react';
import { shallow } from 'enzyme';

import {CardDescriptions, CardImages} from './card.js';

describe('<CardDescriptions />', () => {
  it('Renders without crashing', () => {
    shallow(<CardDescriptions />);
  });

  it('Should have class: card-description-box', () => {
    const wrapper = shallow(<CardDescriptions />);
    expect(wrapper.hasClass('card-description-box'));
  });
});

describe('<CardImages />', () => {
  it('Renders without crashing', () => {
    shallow(<CardImages/>);
  });

  it('Should have classcard-image-container', () => {
    const wrapper = shallow(<CardImages />);
    expect(wrapper.hasClass('card-image-container'));
  });
});