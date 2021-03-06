var chalk = require('chalk');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

var _package = require('./_package');
var projectTypes = require('./projectTypes');
var typeConfigNames = projectTypes.values().map(t => t.configName);

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('type', {
      type: String,
      default: projectTypes.UI.configName,
    });

    this.option('name', {
      type: String,
      default: path.basename(this.destinationPath()),
    });
  }

  customizePackageJSON() {
    var scripts = require(`./scripts/scripts.${this.type}`);

    _package.name = this.option.name;
    _package.scripts = scripts;

    this.fs.writeJSON(
      this.destinationPath('package.json'),
      _package
    );
  }

  checkInputs() {
    if (!typeConfigNames.includes(this.type))
        throw new Error(`Type ${this.type} is not a valid project type. Choose from ${typeConfigNames}`);
  }

  directories() {
    var directories = require(`./directories/directories.${this.type}`);

    var getFolderPath = function getFolderPath(name) {
      return path.join(this.destinationPath(), name);
    }.bind(this);


    for (var i = 0; i < directories.length; i++) {
      mkdirp(getFolderPath(directories[i]));
      this.log(chalk.green('   folder') + ' ' + directories[i]);
    }
  }

  configs() {
    var configs = require(`./configs/configs.${this.type}`);

    for (var i = 0; i < configs.length; i++) {
      this.fs.copy(
        this.templatePath(configs[i]),
        this.destinationPath(configs[i])
      );
    }
  }

  eslintConfig() {
    var eslintBaseName = `.eslintrc.${this.type}.js`;

    this.fs.copy(
      this.templatePath(eslintBaseName),
      this.destinationPath('.eslintrc.js')
    );
  }

  webpackConfig() {
    var webpackBaseName = `webpack.${this.type}.config.js`;

    this.fs.copyTpl(
      this.templatePath(webpackBaseName),
      this.destinationPath('webpack.config.js'),
      { project_name: this.options.name }
    );
  }

  files() {
    if (this.type === projectTypes.EXT.configName) {
      return this._extFiles();
    }

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      { script_src: './index.bundle.js' }
    );

    if (this.type === projectTypes.UMD.configName) {
      this.fs.copyTpl(
        this.templatePath('test:src:index.html'),
        this.destinationPath('test/src/index.html'),
      );

      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('test/src/index.js')
      );
    }
  }

  _extFiles() {
    this.fs.copy(
      this.templatePath('build.sh'),
      this.destinationPath('bin/build.sh')
    );

    this.fs.copyTpl(
      this.templatePath('manifest.json'),
      this.destinationPath('manifest.json'),
      { project_name: this.options.name }
    );

    // Empty content script
    this.fs.write(
      this.destinationPath('src/content/index.js'),
      'import iframe from \'./iframe.ejs\';'
    );

    // Iframe template
    this.fs.copy(
      this.templatePath('iframe.ejs'),
      this.destinationPath('src/content/iframe.ejs'),
    );

    // Empty background script
    this.fs.write(
      this.destinationPath('src/background/index.js'),
      ''
    );

    // Iframe
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/iframe/iframe.html'),
      { script_src: './iframe.bundle.js' }
    );

    this.fs.write(
      this.destinationPath('src/iframe/index.js'),
      'import \'./iframe.html\''
    );

    // Options page
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/options/options.html'),
      { script_src: './options.bundle.js' }
    );

    this.fs.write(
      this.destinationPath('src/options/index.js'),
      'import \'./options.html\';'
    );
  }

  dependencies() {
    var dependencies = require(`./dependencies/dependencies.${this.type}`);
    this.npmInstall(dependencies, { 'save': true });
  }

};

module.exports = Generator;
