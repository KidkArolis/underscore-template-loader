var _ = require("underscore");
module.exports = function (source) {
  this.cacheable && this.cacheable();
  return "var _ = require('underscore'); module.exports = " + _.template(source).source + ";";
};