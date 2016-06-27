var express = require('express');
var request = require('request');
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/quote', function(req, res){
	
	var options = {
		method: 'POST',
		url: 'http://analytics.clickdimensions.com/forms/h/aU2xh5ahBx0SIibIBaQksw',
		qs: {
			cd_visitorkey: 'v2294610734264_71186AF55E674FE78A5CEEF96E0FB1A2',
			rc_fName: req.body.rc_fName,
			rc_lName: req.body.rc_lName,
			rc_email: req.body.rc_email,
			rc_city: req.body.rc_city,
			rc_country: req.body.rc_country,
			rc_company: req.body.rc_company,
			rc_position: req.body.rc_position,
			rc_telephone: req.body.rc_telephone,
			rc_quantity: req.body.rc_quantity,
			rc_source: req.body.rc_source,
			rc_comment: req.body.rc_comment,
			rc_topic: 'RoomCast Quote Request',
			rc_product: 'RoomCast',
			rc_source: 'http://roomcast.teleadapt.com'

		},
		headers: {
			'cache-control': 'no-cache',
			referer: 'http://roomcast.teleadapt.com',
			'content-type': 'application/x-www-form-urlencoded'
		} 
	};
	console.log(options);
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		console.log(body);
	});
});









app.all('*', function(req, res) {
  res.sendFile('/public/index.html', { root: __dirname });
});


app.listen(port);