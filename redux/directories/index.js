const directories = {
  'src/init': true,
  'src/redux-modules': true,
  'src/redux-store/root': true,
  'src/connected-components/app': true,
};

module.exports = Object.keys(directories).filter(k => directories[k]);
