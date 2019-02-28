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
				// //const info = $('#div.field-item.', html).find('table')
				// const info = $('#node-1479', html).find('table')
				// //.find('ul.menu.nav').find('li.expanded.active-trail.active.menu-mlid-2148.active').find('ul.menu.nav')
				// console.log(info.text())
				// if (info.text() === ""){
				// 	console.log("Not here: " + el)
				// }
				// else{
				// 	console.log("this url works: " + el)
				// }

				const info2 =  $('div.field-item.even', html).find('table')
				if (info2.text() === ""){
					console.log("Not here: " + el)
				}
				else{
					console.log("this url works: " + el)
				}
				//console.log(info2.text())
				// var file = fs.createWriteStream("../db/BarnardDormJSONS/test/" + el + '_data'+".json");
				// file.on('open', function(fd) {
				// file.write(JSON.stringify(info2),function(err){file.end();});

			}
			else{
				console.log("there was an error eek")
				return("123")
			}
		}); 
}
	

