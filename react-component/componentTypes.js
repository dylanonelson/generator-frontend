const enumfactory = require('enumfactory');
const createEnum = enumfactory.createEnum;
const defineConstant = enumfactory.defineConstant;

class ComponentType {
  constructor(filename, dirname) {
    this._tplname = filename;
    this._dirname = dirname;
  }

  get id() {
    return this.name().toLowerCase();
  }

  get tplname() {
    return this._tplname;
  }

  get dirname() {
    return this._dirname;
  }
}

module.exports = createEnum(
  defineConstant('VIEW', 'ViewComponent.js', 'view-components'),
  defineConstant('CONNECTED', 'ConnectedComponent.js', 'connected-components'),
)(ComponentType);
