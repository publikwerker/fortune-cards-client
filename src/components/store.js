import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { deckReducer } from '../reducers/index.js';
const rootReducer = combineReducers({
  form: formReducer,
  deck: deckReducer,
});
export default createStore(rootReducer);