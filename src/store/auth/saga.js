import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

// import { useNavigation } from "@react-navigation/native";

// API
import { api } from '../../services/api';

function* loginUserMiddleware({ payload: { credentials } }) {

  // const navigation = useNavigation();

  try {
    const response = yield call(api.post, '/auth/login', credentials);
    const { user: operator, token } = response.data;

    yield put(loginSuccess({ operator, token }));
    // navigation.navigate("Home")
  } catch (error) {
    const message = 'falha no login';
    const statusCode = error.response && error.response.status;
    let description;

    if (statusCode === 401) description = 'usuário ou senha incorretos';

    // customErrorToast({ message, description, statusCode });
    yield put(apiError(error));
  }
}

function* logoutUserMiddleware() {
  try {
    yield put(logoutUserSuccess());

    push('/login');
  } catch (error) {
    const message = 'falha no logout';

    // customErrorToast({ message });
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUserMiddleware);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUserMiddleware);
}

function* authSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
