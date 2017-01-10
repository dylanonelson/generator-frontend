module.exports = {
  'env': {
    browser: true,
    es6: true,
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'installedESLint': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
  }
};
