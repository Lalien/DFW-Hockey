const mongoose   = require('mongoose').set('debug', true);

const connection = mongoose.createConnection('mongodb://localhost/dfw_hockey');

var Schema	   = mongoose.Schema;

var Event 	   = new Schema({
					title: String,
					location: String,
					start_time: String,
					end_time: String,
					date: String
				}, {collection: 'Event'});

module.exports  = connection.model('Event', Event, 'events');