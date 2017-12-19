var express = require('express');
var router  = express.Router();
var Event   = require('../contrib/event');

/* GET events listing. */
router.get('/', function(req, res, next) {
	Event.find({}, function(err, events) {
		res.json(events);
	});
});

module.exports = router;
