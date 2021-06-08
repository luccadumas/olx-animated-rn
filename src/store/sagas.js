import { all } from 'redux-saga/effects';

// public
import AuthSaga from './auth/saga';

export default function* rootSaga() {
  yield all([
    // public
    AuthSaga(),
  ]);
}
