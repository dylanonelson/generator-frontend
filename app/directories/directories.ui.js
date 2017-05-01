var directories = require('./directories.base');

module.exports = Object.keys(directories).filter(k => directories[k]);
