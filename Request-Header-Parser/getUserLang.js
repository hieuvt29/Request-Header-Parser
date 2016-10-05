'use strict';

module.exports = function(req){
  var lang = req.acceptsLanguages() || 'US';
  return lang[0];
}