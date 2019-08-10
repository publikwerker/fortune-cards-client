import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError,
  
} from '../../src/actions/protected.js';

import reducer from '../../src/reducers/auth.js';

describe('auth reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const initialState = {
      authToken:  null,
      cardsDealt: 0,
      currentUser: null,
      loading: false,
      error: null
    };
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('Should return initial state if unknown action is passed', () => {
    const initialState = {
      authToken:  null,
      cardsDealt: 0,
      currentUser: null,
      loading: false,
      error: null
    };
    const state = reducer(undefined, {type: 'UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should handle the setAuthToken action', () => {
    const authToken = '43kd8';
    const state = reducer(undefined, setAuthToken(authToken));
    expect(state.authToken).toEqual(authToken);
  });

  it('Should handle the clearAuth action', () => {
    const authState = {
      authToken: '7349er7y',
      currentUser: 'bob',
      loading: false,
      error: null
    }
    const state = reducer(authState, clearAuth());
    expect(state).toEqual({
      authToken:  null,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should handle authRequest action', () => {
    const state = reducer(undefined, authRequest());
  });
});