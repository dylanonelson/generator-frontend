var fs = require('fs');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('moduleName', { required: true });
  }

  generate() {
    var tp, dp, filename, opts;
    var files = fs.readdirSync(this.templatePath());

    opts = { moduleName: this.moduleName };

    mkdirp('src/redux-modules/' + this.moduleName);

    for (var i = 0; i < files.length; i++) {
      filename = files[i];
      tp = this.templatePath(filename);
      dp = this.destinationPath(`src/redux-modules/${this.moduleName}/${filename}`);
      this.fs.copyTpl(tp, dp, opts);
    }
  }

};

module.exports = Generator;

