import { createAction } from 'redux-actions';

const ACTION_TYPE = '<%= moduleName %>/ACTION_TYPE';

export const actionType = createAction(ACTION_TYPE);
