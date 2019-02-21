
import { 
  RESET,
  SET_DECK, 
  TRIM_DECK, 
  TAKE_QUERY, 
  MAKE_SEARCH,
  TOGGLE_LOGIN, 
  OPEN_HISTORY,
  TOGGLE_SIGNIN,
  SHUFFLE_DECK,
} from '../actions/index.js';

const shuffle = require('shuffle-array');

const initialState = {
spreadNumber: 0,
cardsDealt: 0,
history: [],
deck: [
  {
    id: '0',
    name: 'fool',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  }, 
  {
    id: '1',
    name: 'magus',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '2',
    name: 'heirophant',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '3',
    name: 'empress',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '4',
    name: 'emperor',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '5',
    name: 'fifth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '6',
    name: 'sixth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '7',
    name: 'seventh',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '8',
    name: 'eighth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '9',
    name: 'ninth',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
  {
    id: '10',
    name: 'wheel of fortune',
    desc: 'lorem ipsum',
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
    facing: 0,
  },
]
};

export const deckReducer = (state=initialState, action) => {
  if(action.type === RESET){
    return Object.assign({}, state, {
      login:  null,
      signIn: null,
      spreadNumber: 0,
      readingHistory: null,
      textQuery: null,
      cardsDealt: 0,
    });
  } else if(action.type === SHUFFLE_DECK){
    let newDeck = shuffle(state.deck);
    function direction(){
      return Math.floor(Math.random() * Math.floor(4));
    }
    newDeck.map(card => card.facing = direction());
    return Object.assign({}, state, {
      deck: [...newDeck]
    });
  } else if(action.type === SET_DECK){
    let shuffledDeck = shuffle(action.deck);
    function direction(){
      return Math.floor(Math.random() * Math.floor(4));
    }
    shuffledDeck.map(card => card.facing = direction());
    return Object.assign({}, state, {
      deck: [...shuffledDeck]
    });
  } else if(action.type === TRIM_DECK){
    return Object.assign({}, state, {
      spreadNumber: action.values,
      cardsDealt: [...state.deck.slice(0, action.values)]
    });
  } else if(action.type === TAKE_QUERY){
    return Object.assign({}, state, {
      textQuery: action.textQuery
    });
  } else if(action.type === MAKE_SEARCH){
    return Object.assign({}, state, {
      searchTerm: action.searchTerm
    });
  } else if(action.type === TOGGLE_LOGIN){
    console.log('toggle ran');
    if(state.login === true){
      return Object.assign({}, state, {
        login: false
      })
    } else
    return Object.assign({}, state, {
      login: true
    });
  } else if(action.type === TOGGLE_SIGNIN){
    console.log('toggle signin ran');
    if(state.signin){
      return Object.assign({}, state, {
        signIn: !state.signIn
      })
    } else {
      return Object.assign({}, state, {
        signIn: true
      });
    }
  } else if(action.type === OPEN_HISTORY){
    if (state.readingHistory === true){
      return Object.assign({}, state, {
        readingHistory: false,
      });
    } else {
      return Object.assign({}, state, {
        readingHistory: true,
      });
    }
  };
  return state;
};
