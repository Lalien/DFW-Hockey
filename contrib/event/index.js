const mongoose   = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost/dfw_hockey');

var Schema	   = mongoose.Schema;
var Event 	   = new Schema({
					title: String,
					location: String,
					time: String,
					date: String
				});

module.exports  = connection.model('Event', Event);