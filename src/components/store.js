import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { deckReducer } from '../reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  form: formReducer,
  tarot: deckReducer,
});
//check for localStorage.authToken and login
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));