import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import register from './register';
import nav from './nav';
import login from './login';
import auth from './auth';
import threads from './threads';

const persistConfig = {
  key: 'auth',
  storage,
};

export default combineReducers({
  threads,
  nav,
  login,
  auth: persistReducer(persistConfig, auth),
  register,
});
