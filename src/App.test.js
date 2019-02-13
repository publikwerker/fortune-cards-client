import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});

