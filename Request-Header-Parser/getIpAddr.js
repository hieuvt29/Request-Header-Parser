'use strict';

module.exports= function(req){
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  return ip;
}