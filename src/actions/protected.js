import { API_BASE_URL } from '../config.js';

import jwtDecode from 'jwt-decode';

import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';

import { saveAuthToken, clearAuthToken } from '../local-storage';
import { toggle_login  } from './index.js';

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

export const FETCH_HISTORY_REQUEST = 'FETCH_HISTORY';
export const fetchHistoryRequest = () => ({
  type: FETCH_HISTORY_REQUEST,
});

export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const fetchHistorySuccess = history => ({
  type: FETCH_HISTORY_SUCCESS,
  history
});

export const FETCH_HISTORY_ERROR = 'FETCH_HISTORY_ERROR';
export const fetchHistoryError = error => ({
  type: FETCH_HISTORY_ERROR,
  error
});

export const SAVE_HISTORY_REQUEST = 'SAVE_HISTORY_REQUEST';
export const saveHistoryRequest = (values) => ({
  type: SAVE_HISTORY_REQUEST,
  values
});

export const SAVE_HISTORY_SUCCESS = 'SAVE_HISTORY_SUCCESS';
export const saveHistorySuccess = () => ({
  type: SAVE_HISTORY_SUCCESS,
});

export const SAVE_HISTORY_ERROR = 'SAVE_HISTORY_ERROR';
export const saveHistoryError = error => ({
  type: SAVE_HISTORY_ERROR,
  error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  const currentUser = (decodedToken.user.username);
  const userHistory = (decodedToken.user.history);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(currentUser));
  dispatch(fetchHistorySuccess(userHistory));
  saveAuthToken(authToken);
};

// create new user from register component
export const CreateUser = (username, password) => (dispatch) => {
  return (
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
  )
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => {
    return res;
  })
  .catch(err => {
    const { code } = err;
    return Promise.reject(
      new SubmissionError({
        _error: code
      })
    );
  })
  
};

export const Login = (username, password) => dispatch => {
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
    .then(({authToken}) => {
      dispatch(toggle_login());
      storeAuthInfo(authToken, dispatch)})
    .catch(err => {
      const { code } = err;
      const message =
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(authError(err));
      return new SubmissionError({
          _error: message
        });
    })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err => {
    clearAuthToken(authToken);
  });
};

export const addReadingToHistory = (values) => (dispatch, getState) => {
  const username = getState().auth.currentUser;
  const authToken = getState().auth.authToken;
  const cardsDealt = getState().tarot.cardsDealt;
  const comments = values.comments; 
  const query = getState().tarot.textQuery;

  return fetch(`${API_BASE_URL}/auth`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': 'http://www.fortune.cards',
      authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username:username,
      comments:comments,
      query: query,
      cardsDealt: cardsDealt,
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .then(() => dispatch(saveHistorySuccess()))
  .then(() => dispatch(fetchHistory(username))) 
  .catch(err => {
    clearAuthToken(authToken);
  });
};

export const fetchHistory = username => dispatch => {
  dispatch(fetchHistoryRequest());
  return fetch(`${API_BASE_URL}/auth/?id=${username}/`)
    .then( res => {
      if (!res.ok) {
        return Promise.reject('Something went wrong');
      }
      return res.json();
    })
    .then(history => 
      dispatch(fetchHistorySuccess(history)))
    .catch(err => {
      const { code } = err;
      return Promise.reject(
        new SubmissionError({
          _error: code
        })
      );
    })
};