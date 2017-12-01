const MongoClient = require('mongodb').MongoClient;
const express 	= require('express');
const app 		= express();
const path		= require('path');
const cheerio		= require('cheerio');
const jsondom 	= require('jsondom');
const { JSDOM } = jsdom;

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, () => { console.log("Listening on port 8000..."); });