var chalk = require('chalk');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

var directories = require('./directories');
var configs = require('./configs');
var _package = require('./_package');
var projectTypes = require('./projectTypes');
var typeConfigNames = projectTypes.values().map(t => t.configName);

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.option('type', {
      type: String,
      default: projectTypes.UI.configName,
    });

    this.option('name', {
      type: String,
      default: path.basename(this.destinationPath()),
    });
  }

  init() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      _package.name = this.option.name;

      this.fs.writeJSON(
        this.destinationPath('package.json'),
        _package
      );
    }
  }

  checkInputs() {
    if (!typeConfigNames.includes(this.options.type))
        throw new Error(`Type ${this.options.type} is not a valid project type. Choose from ${typeConfigNames}`);
  }

  directories() {
    var getFolderPath = function getFolderPath(name) {
      return path.join(this.destinationPath(), name);
    }.bind(this);


    for (var i = 0; i < directories.length; i++) {
      mkdirp(getFolderPath(directories[i]));
      this.log(chalk.green('   folder') + ' ' + directories[i]);
    }
  }

  configs() {
    for (var i = 0; i < configs.length; i++) {
      this.fs.copy(
        this.templatePath(configs[i]),
        this.destinationPath(configs[i])
      );
    }
  }

  webpackConfig() {
    var webpackBaseName = `webpack.${this.options.type}.config.js`;

    this.fs.copyTpl(
      this.templatePath(webpackBaseName),
      this.destinationPath('webpack.config.js'),
      { project_name: this.options.name }
    );
  }

  files() {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html')
    );
  }

  dependencies() {
    var dependencies = require(`./dependencies.${this.options.type}`);
    this.npmInstall(dependencies, { 'save-dev': true });
  }

};

module.exports = Generator;
