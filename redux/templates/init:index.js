import React from 'react';
import ReactDOM from 'react-dom';

import root from './root-component';

const renderApp = () => {
  ReactDOM.render(
    React.createElement(root),
    document.getElementById('root')
  );
}

document.addEventListener('DOMContentLoaded', renderApp)
