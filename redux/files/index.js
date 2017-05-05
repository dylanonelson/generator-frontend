const files = {
  'index.js': true,
  'init:index.js': true,
  'modules:init:index.js': true,
  'state:index.js': true,
  'state:initialState.js': true,
  'state:reducer.js': true,
  'state:root:index.js': true,
  'views:app:index.js': true,
  'views:index.js': true,
};

module.exports = Object.keys(files).filter(k => files[k]);
