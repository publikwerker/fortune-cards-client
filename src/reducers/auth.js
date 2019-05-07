import { 
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  FETCH_HISTORY_ERROR,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_REQUEST,
  SAVE_HISTORY_ERROR,
  SAVE_HISTORY_SUCCESS,
  SAVE_HISTORY_REQUEST,
} from '../actions/protected.js';

const initialState = {
  authToken:  null,
  currentUser: null,
  error: null,
  loading: false,
};

export default function reducer (state = initialState, action){
  if (action.type === SET_AUTH_TOKEN){
    return Object.assign({}, state, {
      authToken: action.authToken,
    });
  } else if (action.type === CLEAR_AUTH){
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null,
    });
  } else if (action.type === AUTH_REQUEST){
    return Object.assign({}, state,{
      loading: true,
      error: null,
    });
  } else if (action.type === AUTH_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser,
     // history: action.history,
    });
  } else if (action.type === AUTH_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  } else if(action.type === FETCH_HISTORY_REQUEST ){
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if(action.type === FETCH_HISTORY_SUCCESS){
    return Object.assign({}, state, { 
      loading: false,
      history: action.history,
    });
  } else if(action.type === FETCH_HISTORY_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  } else if(action.type === SAVE_HISTORY_REQUEST ){
    console.log('savehistoryrequest ran');
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if(action.type === SAVE_HISTORY_SUCCESS){
    console.log('savehistorysuccess ran');
    return Object.assign({}, state, { 
      loading: false,
    });
  } else if(action.type === SAVE_HISTORY_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  }
 return state;
}
