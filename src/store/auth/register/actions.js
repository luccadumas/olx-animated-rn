import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
} from './actionTypes';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    payload: { user },
  };
}

export function registerUserSuccessful(user) {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
}

export function registerUserFailed(user) {
  return {
    type: REGISTER_USER_FAILED,
    payload: user,
  };
}
