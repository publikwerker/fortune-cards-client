export const HANDLE_LOGIN =
'HANDLE_LOGIN';
export const handle_login = (username, password) => ({
  type: HANDLE_LOGIN,
  username,
  password
});