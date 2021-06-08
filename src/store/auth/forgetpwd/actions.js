import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
} from './actionTypes';

export function userForgetPassword(user, history) {
  return {
    type: FORGET_PASSWORD,
    payload: { user, history },
  };
}

export function userForgetPasswordSuccess(message) {
  return {
    type: FORGET_PASSWORD_SUCCESS,
    payload: message,
  };
}

export function userForgetPasswordError(message) {
  return {
    type: FORGET_PASSWORD_ERROR,
    payload: message,
  };
}
