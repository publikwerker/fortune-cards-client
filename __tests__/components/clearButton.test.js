import React from 'react';
import { shallow, mount } from 'enzyme';
//import '../setup/setupTests';
import { ClearButton } from '../../src/components/clearButton';
import { reset } from '../../src/actions/index.js';

describe('<ClearButton />', () => {
  it('Renders without crashing', () => {
    shallow(<ClearButton />);
  });

  it('Should fire callback dispatch', () => {
    const cardsDealt = [{
      id:'queen', 
      desc:'long lived'}];
    const dispatch = jest.fn();
    const wrapper = mount(<ClearButton dispatch={dispatch} cardsDealt={cardsDealt}/>);
    wrapper.find('button').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it('Should dispatch the reset action', () => {
    const cardsDealt = [{
      id:'queen', 
      desc:'long lived'}];
    const dispatch = jest.fn();
    const wrapper = mount(<ClearButton
      cardsDealt={cardsDealt} 
      dispatch={dispatch} 
      />);
    wrapper.find('#reset-button').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(reset());
  });
});