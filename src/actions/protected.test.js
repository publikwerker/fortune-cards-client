import { SET_AUTH_TOKEN, 
  setAuthToken, 
  CLEAR_AUTH, 
  clearAuth, 
  AUTH_REQUEST, 
  authRequest, 
  AUTH_SUCCESS, 
  authSuccess, 
  AUTH_ERROR, 
  authError, 
  fetchHistory, 
  fetchHistorySuccess, 
  fetchHistoryRequest } from './protected.js';
import { API_BASE_URL } from '../config.js';

describe('SET_AUTH_TOKEN action', () => {
  it('Should return the action', () => {
    const authToken = '47jdud9';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('CLEAR_AUTH action', () => {
  it('Should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('AUTH_REQUEST action', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('AUTH_SUCCESS action', () => {
  it('Should return the action', () => {
    const currentUser = 'publikwerker';
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('AUTH_ERROR action', () => {
  it('Should return the action', () => {
    const error = '418';
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchHistory', () => {
  it('Should dispatch fetchHistorySuccess', () => {
    const history = [{query: 'why'}, {query: 'why not'}];
    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json() {
          return history;
        }
      })
    );

    const username = 'bob';
    const dispatch = jest.fn();
    return fetchHistory(username)(dispatch)
    .then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/auth/?id=${username}/`);
      expect(dispatch).toHaveBeenCalledWith(fetchHistoryRequest());
      expect(dispatch).toHaveBeenCalledWith(fetchHistorySuccess(history));
    });
  });
});
