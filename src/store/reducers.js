import { combineReducers } from 'redux';

// Authentication
import Auth from './auth/reducer';

const rootReducer = combineReducers({
  // public
  Auth,
});

export default rootReducer;
