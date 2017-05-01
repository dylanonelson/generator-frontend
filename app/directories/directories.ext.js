var directories = require('./directories.base');

directories.builds = true;
directories.meta = true;

module.exports = Object.keys(directories).filter(k => directories[k]);
