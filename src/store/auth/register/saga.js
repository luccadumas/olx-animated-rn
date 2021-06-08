import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Account Redux states
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, registerUserFailed } from './actions';

export function registerUser() {
  return new Promise(resolve => {
    return resolve(true);
  });
}

// Is user register successfull then direct plot user in redux.
function* registerUserMiddleware({ payload: { user } }) {
  try {
    const response = yield call(registerUser, user.email, user.password);
    yield put(registerUserSuccessful(response));
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUserMiddleware);
}

function* registerSaga() {
  yield all([fork(watchUserRegister)]);
}

export default registerSaga;
