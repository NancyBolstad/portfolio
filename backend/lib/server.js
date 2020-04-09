"strict mode";

var serveStatic = require("serve-static");
var express = require("express");
var path = require("path");
var cors = require("cors");
var data = require("../data/projects.json");

var app = express();
var port = process.env.PORT || 8001;
var corsOptions = {
  origin: "*",
  credentials: true
};

app.use(cors(corsOptions));

app.use("/", serveStatic(path.resolve(__dirname, "../frontend/dist")));

app.get("/v1/projects", function(_, res, _) {
  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀Server listening on port http://localhost:${port}`);
});
