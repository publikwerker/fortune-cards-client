import { reset, RESET, TRIM_DECK, trim_deck, SET_DECK, set_deck, TAKE_QUERY, take_query } from '../../src/actions/index.js';

describe('RESET action', () => {
  it('Should return the action', () => {
    const action = reset();
    expect(action.type).toEqual(RESET);
    });
  });

describe('TRIM_DECK action', () => {
  it('Should return the action', () => {
    const values = 5;
    const action = trim_deck(values);
    expect(action.type).toEqual(TRIM_DECK);
    expect(action.values).toEqual(values);
  });
});

describe('SET_DECK action', () => {
  it('Should return the action', () => {
    const deck = [{id:'bob',name:'tim'}];
    const action = set_deck(deck);
    expect(action.type).toEqual(SET_DECK);
    expect(action.deck).toEqual(deck);
  });
});

describe('TAKE_QUERY action', () => {
  it('Should return the action', () => {
    const textQuery = 'why not?';
    const action = take_query(textQuery);
    expect(action.type).toEqual(TAKE_QUERY);
    expect(action.textQuery).toEqual(textQuery);
  });
});
