var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('moduleName', { required: true });
  }

  generate() {
    mkdirp('src/modules/' + this.options.moduleName);
    var tp = this.templatePath('module.js');
    var dp = this.destinationPath(`src/modules/${this.moduleName}/index.js`);
    this.fs.copyTpl(tp, dp, { moduleName: this.moduleName });
  }

};

module.exports = Generator;
