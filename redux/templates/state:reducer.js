import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import initReducer from '../modules/init';
import rootReducer from './root';

const compositeReducer = combineReducers({
  init: initReducer,
});

export default reduceReducers(
  rootReducer,
  compositeReducer,
);
