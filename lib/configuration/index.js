var nconf = require("nconf");

function Config() {
  nconf.argv().env("_");
  var environment = nconf.get("NODE:ENV") || "development";
  nconf.file(environment, "config/" + environment + ".json");
  nconf.file("default", "config/default.json");
}

Config.prototype.get = function(key) {
  return nconf.get(key);
};

Config.prototype.set = function(key, value) {
  return nconf.set(key, value);
};

module.exports = new Config();