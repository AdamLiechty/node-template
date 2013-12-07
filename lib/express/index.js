var express = require("express")
, http = require("http")
, config = require("../configuration")
, heartbeat = require("../routes/heartbeat")
, notFound = require("../middleware/notFound")
, app = express();

app.set("port", config.get("express:port"));

////////////////
// Express stack

// Logger
app.use(express.logger({ immediate: true, format: "dev" }));

app.get("/heartbeat", heartbeat.index);

// 404 as catch-all
app.use(notFound.index);

//
////////////////

http.createServer(app).listen(app.get("port"));
module.exports = app;
