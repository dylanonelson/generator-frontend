const files = {
  'connected-components:app:App.jsx': true,
  'connected-components:app:index.js': true,
  'connected-components:index.js': true,
  'index.js': true,
  'init:index.js': true,
  'init:root-component:index.js': true,
  'redux-store:index.js': true,
  'redux-store:initialState.js': true,
  'redux-store:reducer.js': true,
  'redux-store:root:index.js': true,
};

module.exports = Object.keys(files).filter(k => files[k]);
