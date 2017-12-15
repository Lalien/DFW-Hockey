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
			inner_html       = occurences[key].attribs.title;
			eventData 	     = new eventParser(inner_html);
			event 	         = new Event();
			event.title      = eventData.title;
			event.date       = eventData.data;
			event.start_time = eventData.start_time;
			event.end_time   = eventData.end_time;
			event.date       = eventData.date;
			event.location   = eventData.location;
			console.log(eventData);
			event.save(function(err) {
				if (err) return console.log(err);
			});
		}
	});
});