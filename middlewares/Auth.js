var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var User = require('../models/User');

app.use(cookieParser());

var User = require('../models/User');

module.exports = {
	getCurrentUser : function(req, res, next) {
		var api_token = req.cookies.api_token;
		console.log("Before database call");
		User.findOne({'api_token' : api_token}, function(err, user){
			console.log("now => " + api_token);
			if(err) throw err;
			if(user == null)
			{
				res.redirect('/login');
			}
			else
			{
				req.user = user;
				next();
			}
		});
	}
}
