import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
} from './actionTypes';

export function loginUser(credentials) {
  return {
    type: LOGIN_USER,
    payload: { credentials },
  };
}

export function loginSuccess({ operator, token }) {
  return {
    type: LOGIN_SUCCESS,
    payload: { operator, token },
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

export function apiError(error) {
  return {
    type: API_ERROR,
    payload: error,
  };
}
