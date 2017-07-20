var fs = require('fs');
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

var ComponentTypes = require('./componentTypes');

class Generator extends generators.Base {

  constructor(...args) {
    super(...args);

    this.argument('moduleName', {
      desc: 'Component name, in spinal case',
      required: true
    });

    this.argument('compType', {
      desc: `Type of component to generate. Options are ${ComponentTypes.values().map(v => v.id).join(' | ')}`,
      default: ComponentTypes.VIEW.id,
    });

    if (!ComponentTypes.values().map(v => v.id).includes(this.compType))
      throw new Error(`${this.compType} is not a valid component type. Run yo frontend:react-component --help for the available types.`);
  }

  generate() {
    var tp, dp, filename, opts;
    var type = ComponentTypes.values().find(v => v.id === this.compType);

    var moduleNameCamel = this.moduleName.split('-').map((l) => (
      l[0].toUpperCase() + l.slice(1, l.length)
    )).join('');

    opts = { moduleName: moduleNameCamel };

    mkdirp(`src/${type.dirname}/${this.moduleName}`);

    tp = this.templatePath(type.tplname);

    filename = `${moduleNameCamel}.jsx`;

    dp = this.destinationPath(`src/${type.dirname}/${this.moduleName}/${filename}`);

    this.fs.copyTpl(tp, dp, opts);

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`src/${type.dirname}/${this.moduleName}/index.js`),
      opts,
    );
  }

};

module.exports = Generator;
