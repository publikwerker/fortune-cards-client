export const RESET = 'RESET';
export const reset = () =>({
  type: RESET,
});

export const SET_DECK = 'SET_DECK';
export const set_deck = (deck) => ({
  type: SET_DECK,
  deck
});

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const shuffle_deck = () => ({
  type: SHUFFLE_DECK,
});

export const TAKE_QUERY = 'TAKE_QUERY';
export const take_query = (textQuery) => ({
  type: TAKE_QUERY,
  textQuery
});

export const TOGGLE_INFO ='TOGGLE_INFO';
export const toggle_info = () => ({
  type: TOGGLE_INFO
});

export const TRIM_DECK = 'TRIM_DECK';
export const trim_deck = (values)  => ({
  type:  TRIM_DECK,
  values
});