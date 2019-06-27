import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import { CardDescriptions, CardImages } from './card.js';
import { HistoryForm } from './historyForm';

describe('<HistoryForm />', () => {
  it('Renders without crashing', () => {
    shallow(<HistoryForm />);
  });
  
})