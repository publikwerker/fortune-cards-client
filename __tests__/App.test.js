import React from 'react';
import {App} from '../src/App';
import { shallow } from 'enzyme';
//import './setup/setupTests';

describe('<App />', () => {
  test('Renders without crashing', () => {
    shallow(<App />);
  });

});

