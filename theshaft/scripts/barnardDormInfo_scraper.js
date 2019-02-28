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

	// request(el)
	// .then()
	// {

	
}

// request("https://barnard.edu/reslife/housing-options/600", function(err, resp, html) {
// 	if (!err){
// 				const $= cheerio.load(html);
// 				const menu = $('#block-menu-block-barnard-edu-main-menu-3-4').text();
// 				console.log(menu)

// 				console.log("BREAK \n")
// 				const dorms = $('#block-menu-block-barnard-edu-main-menu-3-4').find('ul.menu.nav').find('li.expanded.active-trail.active.menu-mlid-2148.active').find('ul.menu.nav')
// 				console.log(dorms.text())
				
// 				var links = [];   
// 				dorms.each( function () {
// 					var link = $(this).attr('href');
// 					links.push({"link": link});
// 					links.push({"link": link});
// 				});
				
// 				console.log(links); 

//   }
// });
