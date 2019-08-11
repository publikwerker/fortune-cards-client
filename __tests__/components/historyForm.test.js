import React from 'react';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import { CardDescriptions, CardImages } from '../../src/components/card.js';
import { HistoryForm } from '../../src/components/historyForm';

describe('<HistoryForm />', () => {
  it('Renders without crashing', () => {
    shallow(<HistoryForm />);
  });
  
})