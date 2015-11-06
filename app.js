var express = require('express');
var app = express();
app.get('/', function (req, res) {
	 console.log('in server');
  res.send('Hello World!');
});
app.get('/test', function (req, res) {
  res.send('test');
});
var server = app.listen(9090, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});