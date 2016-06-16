var express = require('express');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/testy', function(req, res){
 res.send('hi');
});




app.all('*', function(req, res) {
  res.sendFile('/public/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);