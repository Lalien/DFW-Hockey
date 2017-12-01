const $        = require('cheerio');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

module.exports = function(html) {
	// Set the title
	this.title    = entities.decode($('.wrToolTipHeader',html).html());
	// Set the time
	this.time     = entities.decode($('.wrToolTipTime', html).html());
	// Set the date
	this.date     = "";
	// Set the location
	this.location = "";
}