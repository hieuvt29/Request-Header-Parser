'use strict';
var express = require('express');
var router = express.Router();

var getIpAddr = require('../Request-Header-Parser/getIpAddr.js');
var getUserLang = require('../Request-Header-Parser/getUserLang.js');
var getUserOs = require('../Request-Header-Parser/getUserOs.js');

router.get('/', function(req, res, next){
  var ip = getIpAddr(req);
  var lang = getUserLang(req);
  var software = getUserOs();

  var resObj = {"ipaddress": ip, "language": lang, "software":software};
  res.send(resObj);
});

module.exports = router;
