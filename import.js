const $		  		  = require('cheerio');
const jsdom 		  = require('jsdom');
const { JSDOM } 	  = jsdom;
const eventParser	  = require('./contrib/event-parser');
const Event 		  = require('./contrib/event');

JSDOM.fromURL("http://dallasstars.maxgalaxy.net/Schedule.aspx?ID=11", {}).then(dom => {
	html  	   = dom.serialize();
	occurences = $('.rsApt ', html);
	Object.keys(occurences).forEach(function(element, key) {
		if (!isNaN(element)) {
			occurence      = occurences[key];
			inner_html     = occurence.attribs.title;
			eventData 	   = new eventParser(inner_html);
			event 	       = new Event();
			event.title    = eventData.title;
			event.date     = eventData.data;
			event.time     = eventData.time;
			event.location = eventData.location;
			event.save(function(err) {
				if (err) console.log(err);
				console.log("Added to DB!");
			});
		}
	});
});