var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

var dependencies = require('./dependencies');
var directories = require('./directories');
var files = require('./files');

class Generator extends generators.Base {

  makeDirectories() {
    for (var i = 0; i < directories.length; i++) {
      mkdirp(directories[i]);
    }
  }

  copyFiles() {
    var tp, dp;

    for (var i = 0; i < files.length; i++) {
      tp = this.templatePath(files[i]);

      dp = (function() {
       var p = files[i].replace(new RegExp(':', 'g'), '/');
        return this.destinationPath('src/' + p);
      }).bind(this)();

      this.copy(tp, dp);
    }
  }

  installReduxDependencies() {
    this.npmInstall(dependencies, { 'save': true });
  }

};

module.exports = Generator;
