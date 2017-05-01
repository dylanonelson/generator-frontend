var dependencies = require('./dependencies.base.json');

var exclude = [
  'react',
  'react-dom',
];

exclude.forEach(ex => dependencies[ex] = false);

dependencies.chai = true;
dependencies.mocha = true;

module.exports = Object.keys(dependencies).filter(k => dependencies[k]);
