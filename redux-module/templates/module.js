import { createAction, handleActions } from 'redux-actions';

// const ACTION_TYPE = '<%= moduleName %>/ACTION_TYPE';

// export const actionTypeCreator =
//   createAction(ACTION_TYPE, (payload) => ({ payload }));

const reducerMap = {
  // [ACTION_TYPE]: (previous = {}, action) {
  // },
};

const initialState = {};

export default handleActions(reducerMap, initialState);
