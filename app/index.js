var chalk = require('chalk');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

var dependencies = require('./dependencies');
var directories = require('./directories');
var configs = require('./configs');
var package = require('./_package');

var generator = generators.Base.extend({

  init: function() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      package.name = path.basename(this.destinationPath());

      this.fs.writeJSON(
        this.destinationPath('package.json'),
        package
      );
    }
  },

  directories: function() {
    var getFolderPath = function getFolderPath(name) {
      return path.join(this.destinationPath(), name);
    }.bind(this);


    for (var i = 0; i < directories.length; i++) {
      mkdirp(getFolderPath(directories[i]));
      this.log(chalk.green('   folder') + ' ' + directories[i]);
    }
  },

  configs: function() {
    for (var i = 0; i < configs.length; i++) {
      this.fs.copy(
        this.templatePath(configs[i]),
        this.destinationPath(configs[i])
      );
    }
  },

  files: function() {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html')
    );
  },

  dependencies: function() {
    this.npmInstall(dependencies, { 'save-dev': true });
  },

});

module.exports = generator;
