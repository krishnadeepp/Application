//libraries
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

//custom imports
var conf = require('./lib/config/conf.js');
//var db = require('./lib/database/connection');


var app = express();
//var dbconnection = conf.dbconnection.server + "://"+conf.dbconnection.ip+":"+conf.dbconnection.port+"/"+conf.dbconnection.database;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//require('./routes').Route(app);
var server = app.listen(conf.serverport, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);

});

app.get('/',function(req,res){
  res.send('helloworld');
});

// db.connect(dbconnection,function(err){
// console.log(dbconnection);
// 	if(err){
// 		console.log(err);
// 		process.exit(1);

// 	}
// 	else
// 		console.log('mongodb started');

// });