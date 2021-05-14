"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _ip2locationNodejs = _interopRequireDefault(require("ip2location-nodejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_ip2locationNodejs["default"].IP2Location_init("./db/IP2LOCATION-LITE-DB9/IP2LOCATION-LITE-DB9.BIN");

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.get('/ip2geo/:ipaddr', function (req, res) {
  var result = _ip2locationNodejs["default"].IP2Location_get_all(req.params.ipaddr);

  return res.json(result);
});
app.listen(process.env.PORT, function () {
  return console.log("Example app listening on port ".concat(process.env.PORT, "!"));
});