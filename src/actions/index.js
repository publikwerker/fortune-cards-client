export const GET_DECK = 'GET_DECK';
export const get_deck = () => ({
  type: GET_DECK
});

export const TRIM_DECK = 'TRIM_DECK';
export const trim_deck = (values)  => ({
  type:  TRIM_DECK,
  values
});

export const SET_DECK = 'SET_DECK';
export const set_deck = (deck) => ({
  type: SET_DECK,
  deck
});

export const TAKE_QUERY = 'TAKE_QUERY';
export const take_query = (textQuery) => ({
  type: TAKE_QUERY,
  textQuery
});