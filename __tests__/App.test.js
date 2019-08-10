import React from 'react';
import {App} from '../src/App';
import { shallow } from 'enzyme';
import './setup/setupTests';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

});

