import { 
  SET_DECK, 
  GET_DECK, 
  TRIM_DECK, 
  TAKE_QUERY, 
  MAKE_SEARCH,
  TOGGLE_LOGIN,
  OPEN_LOGIN, } from '../actions/index.js';

const shuffle = require('shuffle-array');

const initialState = {
spreadNumber: 0,
deck: [
  {
    id: '0',
    name: 'fool',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  }, 
  {
    id: '1',
    name: 'magus',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '2',
    name: 'heirophant',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '3',
    name: 'empress',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '4',
    name: 'emperor',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '5',
    name: 'fifth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '6',
    name: 'sixth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '7',
    name: 'seventh',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '8',
    name: 'eighth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '9',
    name: 'ninth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
  {
    id: '10',
    name: 'wheel of fortune',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    position: 0,
  },
]
};

let shuffledDeck= shuffle(initialState.deck);
export const deckReducer = (state=initialState, action) => {
  if(action.type === SET_DECK){
    return Object.assign({}, state, {
      deck: [...action.deck]
    });
  }
  if(action.type === GET_DECK){
  return Object.assign({}, state, {
    ...shuffledDeck});
  }
  if(action.type === TRIM_DECK){
    return Object.assign({}, state, {
      spreadNumber: action.values
    });
  }
  if(action.type === TAKE_QUERY){
    return Object.assign({}, state, {
      textQuery: action.textQuery
    });
  }
  if(action.type === MAKE_SEARCH){
    return Object.assign({}, state, {
      searchTerm: action.searchTerm
    });
  }
  if(action.type=== OPEN_LOGIN){
    return Object.assign({}, state, {
      login: true
    });
  }
  if(action.type === TOGGLE_LOGIN){
    console.log('toggle ran');
    if(state.login === true){
      let notLogin = !state.login;
      return Object.assign({}, state, {
        login: notLogin
      })
    } else
    return Object.assign({}, state, {
      login: true
    });
  }

  return state;
};
