var dependencies = require('./dependencies.base.json');

module.exports = Object.keys(dependencies).filter(k => dependencies[k]);
