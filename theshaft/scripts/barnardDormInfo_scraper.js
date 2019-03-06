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
			console.log(dorms.text())
			
			links = dorms.find('a').toArray() 
			//console.log(links)
			links.forEach((elem) => {
				console.log(elem['attribs']['href'])
				urls.push(elem['attribs']['href']); 
			})
			console.log(urls); 
			return urls; 
		}
		else{
			return("123")
		}
}).then((curls) => {
	console.log("in the then thing")
	console.log(curls); 
	curls.forEach(function(element){
		addJSON("https://barnard.edu/" + element); 
	  })
});

function addJSON(el){
	console.log("Welcome to addJSON method. Woot")
	console.log(el); 

	request(el)
		.then((html) => {
			if (html){
				const info =  $('div.field-item.even', html).find('table')
				if (info.text() === ""){
					console.log("Not here: " + el)
				}
				else{
					console.log("this url works: " + el)
					var name = el.split('housing-options/')[1]; 
					console.log(name); 
					var file = fs.createWriteStream("../db/BarnardDormJSONS/test/" + name + '_data'+".json");
					file.on('open', function(fd) {
						//TODO
						//Prak plz help. stringify not working 
						//WORK HERE TO MAKE JSON FORMAT RIGHT 
						file.write(JSON.stringify(info),function(err){file.end();});
					});

				}
				//console.log(info.text())
			}
			else{
				console.log("there was an error eek")
				return("123")
			}
		}); 
}
	

