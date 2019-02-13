import { API_BASE_URL } from '../config.js';

import jwtDecode from 'jwt-decode';

import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';

import { saveAuthToken, clearAuthToken } from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  const currentUser = (decodedToken.user.username);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(currentUser));
  saveAuthToken(authToken);
};

export const Login = (username, password) => dispatch => {
  console.log('login ran');
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .then(({authToken}) => {
      console.log(authToken);
      storeAuthInfo(authToken, dispatch)})
    .catch(err => {
      const { code } = err;
      const message =
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err => {
    clearAuthToken(authToken);
  });
};

export const addReadingToHistory = () => (dispatch, getState) => {
  const userId = getState().auth.currentUser;
  const authToken = getState().auth.authToken;
  const cards = getState().tarot.spreadNumber;
  const spread = getState().tarot.deck.slice(0, cards); 
  const query = getState().tarot.textQuery;

  return fetch(`${API_BASE_URL}/auth/add`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${authToken}`,
    },
    body: {
      comments: '',
      query,
      spread,
      userId:'',
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err => {
    clearAuthToken(authToken);
  });
}