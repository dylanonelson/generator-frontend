const dependencies = {
  'babel-polyfill': true,
  'react-redux': true,
  'reduce-reducers': true,
  'redux-actions': true,
  'redux-saga': true,
  redux: true,
};

module.exports = Object.keys(dependencies).filter(k => dependencies[k]);
