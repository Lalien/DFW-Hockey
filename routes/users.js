var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json([
		{
			'what' : 'fuck'
		},
		{
			'what' : 'you'
		}
	]);
});

module.exports = router;
