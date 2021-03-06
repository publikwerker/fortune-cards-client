import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Footer from '../../src/components/footer';

describe('<Footer />', () => {
  it.skip('Renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Should contain a <p>', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.containsMatchingElement( <p className="copy-info">All images and text &copy; 2019 Publikwerks, LLC.</p> )).toEqual(true);
  });

  it('Should have class: footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.hasClass('footer')).toEqual(true);
  });
});
