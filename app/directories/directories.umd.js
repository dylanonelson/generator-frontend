var directories = require('./directories.base');

directories.test = true;
directories['test/src'] = true;
directories['test/dist'] = true;

module.exports = Object.keys(directories).filter(k => directories[k]);
