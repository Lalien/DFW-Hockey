var express = require('express');
var router  = express.Router();
var Event   = require('../contrib/event');
var ObjectId= require('mongodb').ObjectID;

/* GET events listing. */
router.get('/', function(req, res, next) {
	Event.find({}, function(err, events) {
		res.json(events);
	});
});

router.get('/get-event', function(req, res, next) {
	Event.findOne({_id:ObjectId(req.query.id)}, function(err, event) {
		res.json(event);
	});
});

module.exports = router;
