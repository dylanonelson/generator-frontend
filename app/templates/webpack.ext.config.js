var config = require('./webpack.base.config.js');

config.entry = {
  background: './src/background/index',
  content: './src/content/index',
  iframe: './src/iframe/index',
  options: './src/options/index',
};

module.exports = config;
