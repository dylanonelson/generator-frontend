import React from 'react';
import store from '../state';
import { Provider } from 'react-redux';

import App from './app';

const root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default root;
