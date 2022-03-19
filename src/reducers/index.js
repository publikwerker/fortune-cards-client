import { 
  RESET,
  SAVE_NOTES,
  SAVE_READING,
  SET_DECK, 
  SHUFFLE_DECK,
  TAKE_QUERY, 
  TOGGLE_INFO,
  TRIM_DECK, 
} from '../actions/index.js';

const shuffle = require( 'shuffle-array' );

const initialState = {
  username: null,
  id: null,
  showInfo: true,
  spreadNumber: 0,
  textQuery: null,
  cardsDealt: [],
  notes: '',
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

export const deckReducer = ( state=initialState, action ) => {
  if( action.type === RESET ){
    return Object.assign( {}, state, {
      spreadNumber: 0,
      textQuery: null,
      cardsDealt: [],
    });

  // shuffles deck
  } else if( action.type === SHUFFLE_DECK ){
    console.log( "shuffling deck" );
    let newDeck = shuffle( state.deck );
    // determines which direction cards face
    function direction(){
      return Math.floor( Math.random() * Math.floor( 4 ) );
    }
    newDeck.map( card => card.facing = direction() );
    return Object.assign( {}, state, {
      deck: [...newDeck]
    });

  // saves notes to current reading
  } else if ( action.type === SAVE_NOTES ) {
    console.log( "saving notes" );
    return Object.assign( {}, state, {
      notes: action.notes
    });

  // adds current reading to history
  } else if ( action.type === SAVE_READING ) {
    console.log( "saving reading" );
    return Object.assign( {}, state, {
      history: [ ...state.history, action.reading]
    });

  // shuffle new deck and set to state
  } else if( action.type === SET_DECK ){
    console.log( "setting deck");
    return Object.assign({}, state, {
      deck: [...action.deck]
    });

  // cut deck to number user requested
  } else if(action.type === TRIM_DECK){
    console.log( "trimming deck" );
    return Object.assign({}, state, {
      spreadNumber: action.values,
      cardsDealt: [...state.deck.slice(0, action.values)]
    });

  // record user query
  } else if(action.type === TAKE_QUERY){
    return Object.assign({}, state, {
      textQuery: action.textQuery
    });

  // toggles more info modal
  } else if(action.type === TOGGLE_INFO){
    return Object.assign({}, state, {
      showInfo: !state.showInfo,
    });

  };

  return state;
};
