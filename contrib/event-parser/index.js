const $        = require('cheerio');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

module.exports = function(html) {
	tooltips 	  = $('.wrToolTipValue', html);
	console.log(tooltips[1].children[0].data);
	// Split the time by the hyphen into start and end times
	times = entities.decode($('.wrToolTipTime', html).html().trim()).split("-");
	// Set the title
	this.title      = entities.decode($('.wrToolTipHeader',html).html().trim());
	// Set the start time
	this.start_time = times[0].trim();
	// Set the end time
	this.end_time 	= times[1].trim();
	// Set the date
	this.date       = tooltips[1].children[0].data;
	// Set the location
	this.location   = tooltips.html();
}