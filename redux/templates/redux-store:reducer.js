import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import rootReducer from './root';

const compositeReducer = combineReducers({
  // Add reducers here
});

export default reduceReducers(
  rootReducer,
  compositeReducer,
);
