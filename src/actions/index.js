export const MAKE_SEARCH = 'MAKE_SEARCH';
export const make_search = (searchTerm) => ({
  type: MAKE_SEARCH,
  searchTerm
});

export const OPEN_HISTORY = 'OPEN_HISTORY';
export const open_history = () => ({
  type: OPEN_HISTORY
});

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


export const TOGGLE_DESCRIPTION ='TOGGLE_DESCRIPTION';
export const toggleDescription = () => ({
  type: TOGGLE_DESCRIPTION
});

export const TOGGLE_LOGIN ='TOGGLE_LOGIN';
export const toggle_login = () => ({
  type: TOGGLE_LOGIN
});

export const TOGGLE_INFO ='TOGGLE_INFO';
export const toggle_info = () => ({
  type: TOGGLE_INFO
});

export const TOGGLE_SIGNIN = 'TOGGLE_SIGNIN';
export const toggle_signin = () => ({
  type: TOGGLE_SIGNIN,
});

export const TRIM_DECK = 'TRIM_DECK';
export const trim_deck = (values)  => ({
  type:  TRIM_DECK,
  values
});