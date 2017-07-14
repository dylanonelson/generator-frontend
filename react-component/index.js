var fs = require('fs');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('moduleName', {
      description: 'Component name, in spinal case',
      required: true
    });

    this.argument('filePath', {
      description: 'Subfolder inside `src`',
      default: 'view-component'
    });
  }

  generate() {
    var tp, dp, filename, opts;
    var files = fs.readdirSync(this.templatePath());

    var moduleNameCamel = this.moduleName.split('-').map((l) => (
      l[0].toUpperCase() + l.slice(1, l.length)
    )).join('');

    opts = { moduleName: moduleNameCamel };

    mkdirp(`src/${this.filePath}/${this.moduleName}`);

    for (var i = 0; i < files.length; i++) {
      filename = files[i];

      tp = this.templatePath(filename);

      if (filename === 'Component.jsx') filename = `${moduleNameCamel}.jsx`;

      dp = this.destinationPath(`src/${this.filePath}/${this.moduleName}/${filename}`);

      this.fs.copyTpl(tp, dp, opts);
    }
  }

};

module.exports = Generator;
