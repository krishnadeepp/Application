

var config = (function(){
var env = require('../config/config.json');
 var node_env = process.env.NODE_ENV || 'dev';
 return env[node_env];
})();

module.exports = config;


