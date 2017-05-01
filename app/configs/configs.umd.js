var configs = require('./configs.base');

configs['webpack.config.test.js'] = true;

module.exports = Object.keys(configs).filter(k => configs[k]);
