var enumfactory = require('enumfactory');
var createEnum = enumfactory.createEnum;
var defineConstant = enumfactory.defineConstant;

class ProjectType {
  get configName() {
    return this.name().toLowerCase();
  }
}

module.exports = createEnum(
  defineConstant('UI'),
  defineConstant('UMD')
)(ProjectType);
