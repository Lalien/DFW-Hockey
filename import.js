const $		  		  = require('cheerio');
const jsdom 		  = require('jsdom');
const { JSDOM } 	  = jsdom;
const Event	  = require('./contrib/event-parser');

JSDOM.fromURL("http://dallasstars.maxgalaxy.net/Schedule.aspx?ID=11", {}).then(dom => {
	html  	   = dom.serialize();
	occurences = $('.rsApt ', html);
	Object.keys(occurences).forEach(function(element, key) {
		if (!isNaN(element)) {
			occurence   = occurences[key];
			inner_html  = occurence.attribs.title;
			event 		= new Event(inner_html);
			console.log(JSON.stringify(event));
		}
	});
});