import { handleActions } from 'redux-actions';
import { actionType } from './actions';

const reducerMap = {
  // [ACTION_TYPE]: (previous = {}, action) => {
  // },
};

const initialState = {};

export default handleActions(reducerMap, initialState);
