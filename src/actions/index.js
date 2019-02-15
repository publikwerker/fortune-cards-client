export const TRIM_DECK = 'TRIM_DECK';
export const trim_deck = (values)  => ({
  type:  TRIM_DECK,
  values
});

export const GET_DECK = 'GET_DECK';
export const get_deck = () => ({
  type: GET_DECK,
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

export const MAKE_SEARCH = 'MAKE_SEARCH';
export const make_search = (searchTerm) => ({
  type: MAKE_SEARCH,
  searchTerm
});

export const TOGGLE_LOGIN ='TOGGLE_LOGIN';
export const toggle_login = () => ({
  type: TOGGLE_LOGIN
});

export const TOGGLE_SIGNIN = 'TOGGLE_SIGNIN';
export const toggle_signin = () => ({
  type: TOGGLE_SIGNIN,
});

export const OPEN_HISTORY = 'OPEN_HISTORY';
export const open_history = () => ({
  type: OPEN_HISTORY
});