var dependencies = require('./dependencies.base.json');

dependencies['ejs-loader'] = true;

module.exports = Object.keys(dependencies).filter(k => dependencies[k]);
