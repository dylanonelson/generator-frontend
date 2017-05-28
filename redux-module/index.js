var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

var files = [
  'actions.js',
  'index.js',
  'middleware.js',
  'reducer.js',
];

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('moduleName', { required: true });
  }

  generate() {
    var tp, dp, filename, opts;
    opts = { moduleName: this.moduleName };

    mkdirp('src/modules/' + this.moduleName);

    for (var i = 0; i < files.length; i++) {
      filename = files[i];
      tp = this.templatePath(filename);
      dp = this.destinationPath(`src/modules/${this.moduleName}/${filename}`);
      this.fs.copyTpl(tp, dp, opts);
    }
  }

};

module.exports = Generator;
