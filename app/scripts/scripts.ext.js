var scripts = require('./scripts.base');

Object.assign(scripts, {
  'build:extension': 'npm run build && ./bin/build.sh',
});

module.exports = scripts;
