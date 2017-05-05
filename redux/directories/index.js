const directories = {
  'src/init': true,
  'src/modules': true,
  'src/state/root': true,
  'src/views/app': true,
};

module.exports = Object.keys(directories).filter(k => directories[k]);
