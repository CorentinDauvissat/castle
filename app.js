const request = require('request');
const cheerio = require('cheerio');

var url = 'https://www.relaischateaux.com/us/site-map/etablissements';

request(url, function(err, response, html){
	if(!err){
		var $ = cheerio.load(html);
		$("#countryF").first().remove()
		var allItems = $('#countryF').children();
		var items = [];
		allItems.each(function(index){
			items.push($('#countryF').children().eq(0).children().eq(index).text());
	})
	console.log(items);
	}	
});