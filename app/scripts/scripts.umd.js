var scripts = require('./scripts.base');

Object.assign(scripts, {
  'build:test': 'npm run build -- --config=webpack.config.test.js',
  'watch:test': 'npm run build:test -- --watch',
  'test:server': 'mocha ./test/dist/ -w',
  'test:browser': 'open ./test/dist/index.html',
});

module.exports = scripts;
