import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import {CardDescriptions, CardImages} from '../../src/components/card.js';

describe('<CardDescriptions />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<CardDescriptions />);
  });

  it('Should have class: card__description--box', () => {
    const wrapper = shallow(<CardDescriptions />);
    expect(wrapper.hasClass('card__description--box')).toEqual(true);
  });
});

describe('<CardImages />', () => {
  it('Renders without crashing', () => {
    shallow(<CardImages/>);
  });

  it('Should have class card__image-container', () => {
    const wrapper = shallow(<CardImages />);
    expect(wrapper.hasClass('card__image')).toEqual(true);;
  });
});