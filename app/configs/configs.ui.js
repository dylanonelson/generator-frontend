var configs = require('./configs.base');

module.exports = Object.keys(configs).filter(k => configs[k]);
