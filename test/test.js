var assert   = require('assert');
var expect   = require('expect.js');
var Event    = require('../contrib/event');

describe('Event', function() {
	describe('#save()', function() {
		it('Should be able to save a new record and find it by its ID and delete it.', function(done) {
			event = new Event();
			event.title      = "Stick and Puck";
			event.date       = "10/12/2017";
			event.start_time = "7:30 PM";
			event.end_time   = "8:30 PM";
			event.location   = "FB - Bob Gainey Rink";
			event.save(function(err, doc) {
				if (err)
					done(err);
				Event.remove({ _id: doc._id}, done);
			});
		});
	});
});