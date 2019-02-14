import { SET_AUTH_TOKEN, setAuthToken, CLEAR_AUTH, clearAuth, AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError } from './protected.js';

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