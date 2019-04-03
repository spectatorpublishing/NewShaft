const request = require('request-promise');
const $ = require('cheerio');
const https = require('https');
const fs = require('fs');
const housing_options= 'https://barnard.edu/reslife/housing-options';


request(housing_options)
	.then((html) => {
		const urls = []; 
		var links = []; 
		if (html){
			const dorms = $('#block-menu-block-barnard-edu-main-menu-3-4', html).find('ul.menu.nav').find('li.expanded.active-trail.active.menu-mlid-2148.active').find('ul.menu.nav')
			
			links = dorms.find('a').toArray() 
			links.forEach((elem) => {
				urls.push(elem['attribs']['href']); 
			})
			return urls; 
		}
		else{
			return("123")
		}
}).then((curls) => {
	curls.forEach(function(element){
		addJSON("https://barnard.edu/" + element); 
	  })
});

function addJSON(el){
	request(el)
		.then((html) => {
			if (html){
				const info =  $('div.field-item.even', html).find('table')
				if (info.text() !== ""){
					var name = el.split('housing-options/')[1]; 
					var file = fs.createWriteStream("../db/BarnardDormJSONS/test/" + name + '_data'+".json");
					file.on('open', function(fd) {
						//TODO
						//Prak plz help. stringify not working 
						//WORK HERE TO MAKE JSON FORMAT RIGHT 
						file.write(JSON.stringify(info),function(err){file.end();});
					});
				}
			}
			else{
				return("123")
			}
		}); 
}
	

