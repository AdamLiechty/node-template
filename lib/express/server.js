var fs = require("fs")
, http = require("http")
, https = require("https")
, config = require("../configuration");

function Server(app) {
  var httpsOptions = {
    key: fs.readFileSync("./lib/secure/key.pem"),
    cert: fs.readFileSync("./lib/secure/cert.pem")
  };

  var server = config.get("express:https")
    ? https.createServer(httpsOptions, app)
    : http.createServer(app);

  return server.listen(app.get("port"));
}

module.exports = Server;