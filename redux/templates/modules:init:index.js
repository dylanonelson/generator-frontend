import { createAction, handleActions } from 'redux-actions';

const LOGIN_USER = 'init/LOGIN_USER';

export const loginUser = createAction(LOGIN_USER, (user) => {
  return {
    currentUser: user,
  };
});

const reducerMap = {
  [LOGIN_USER]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      currentUser: action.payload.currentUser,
    });
  },
};

export default handleActions(reducerMap, {});
