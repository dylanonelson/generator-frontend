const dependencies = {
  'react-redux': true,
  'reduce-reducers': true,
  'redux-actions': true,
  redux: true,
};

module.exports = Object.keys(dependencies).filter(k => dependencies[k]);
