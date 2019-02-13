import React from 'react';
import { shallow } from 'enzyme';

import Footer from './footer';

describe('<Footer />', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Should contain a <p>', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.containsMatchingElement( <p className="copy-info">All images and text copyright 2019 Publikwerks, LLC.</p> ));
  });

  it('Should have class: footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.hasClass('footer'));
  });
});
