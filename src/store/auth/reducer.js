import {
  getLoggedInOperator,
  getLoggedInOperatorRoles,
  setLoggedInOperator,
  setLoggedInOperatorToken,
} from '../../util/auth';
import setRequestToken from '../../services/api';

import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
} from './actionTypes';

const INITIAL_STATE = {
  error: null,
  loading: false,
  signed: false,
  operator: getLoggedInOperator(),
  roles: getLoggedInOperatorRoles(),
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { operator, token } = action.payload;
      const { roles } = operator;

      setRequestToken(token);
      setLoggedInOperator(operator);
      setLoggedInOperatorToken(token);

      delete operator.roles;

      return {
        ...state,
        loading: false,
        signed: true,
        operator,
        roles,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      setRequestToken(undefined);
      // localStorage.clear();

      return {
        ...state,
        signed: false,
        operator: {},
        roles: {},
      };
    }
    case API_ERROR: {
      return {
        ...state,
        loading: false,
        signed: false,
      };
    }
    default:
      return { ...state };
  }
};

export default auth;
