import ReactDOM from 'react-dom';
import React from 'react';

import App from '../views';

const renderApp = () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
}

document.addEventListener('DOMContentLoaded', renderApp)
