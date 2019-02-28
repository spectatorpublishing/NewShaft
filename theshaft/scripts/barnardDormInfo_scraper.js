const request = require('request-promise');
const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const housing_options= 'https://barnard.edu/reslife/housing-options';

request(housing_options, function(err, resp, html) {
        if (!err){
					const $= cheerio.load(html);
					const menu = $('#block-menu-block-barnard-edu-main-menu-3-4').text();
					console.log(menu)

					console.log("BREAK \n")
					const dorms = $('#block-menu-block-barnard-edu-main-menu-3-4').find('ul.menu.nav').find('li.expanded.active-trail.active.menu-mlid-2148.active').find('ul.menu.nav')
					console.log(dorms.text())
					
					var links = [];   
					dorms.each( function () {
						var link = $(this).attr('href');
						links.push({"link": link});
						links.push({"link": link});
					});
					
					console.log(links); 

					//document.querySelector('#block-menu-block-barnard-edu-main-menu-3-4 > div > ul > li.expanded.active-trail.active.menu-mlid-2148.active > ul > li.first.leaf.menu-mlid-3611')
					//#block-menu-block-barnard-edu-main-menu-3-4 > div > ul > li.expanded.active-trail.active.menu-mlid-2148.active > ul > li.first.leaf.menu-mlid-3611
					//#block-menu-block-barnard-edu-main-menu-3-4 > div > ul > li.expanded.active-trail.active.menu-mlid-2148.active > ul
					
      }
});



//console.log("testings");
// var pullDormInfo= function(url){
// 	rp(url)
// 	  .then(function(html){
// 			bb=url.split("/");
// 			test=bb[bb.length-1];
// 			test=test.substring(0,test.length)
// 			console.log(test)
// 			var a = {};
// 	    const carlton_data = {};
// 			var amenities=$('.field-label', html).text();
// 			var amen= amenities.split(":")
// 			amen.pop();
// 			for(g=1; g<amen.length; g++){
// 				amen[g]=amen[g].substring(1)
// 			}
// 			var hello;
// 			amen.forEach(function(element){
// 				hello=$(`.field-label:contains(${element}) ~ .field-items:not(p)`, html);
// 				hello=hello.text().trim()
// 				a[(" "+element)]=hello;
// 			})
// 			return [a, test];
// 			}).catch(function(err){
// 				console.log("error");
// 			})
// 		.then((mats) => {
// 			var a = mats[0];
// 			var test = mats[1];
// 			console.log(test);
// 			var file = fs.createWriteStream("../db/BarnardDormJSONS/" + test + '_data'+".json");
// 			file.on('open', function(fd) {
// 				file.write(JSON.stringify(a),function(err){file.end();});
// 			});
// 		}).then(function(){
// 			console.log("hello I'm testing shit")
// 		});
// }

// var dormSweep =function(url){
// 	var dorm_list;
// 	rp(url)
//   .then(function(html){
//     //success!
//     return dorm_list= $('#menu nav', html).find('a href').toArray();
//     console.log(dorm_list)
// 	})
// 	// .then((dorm_list) => 	{
//   // 		dorm_list.forEach(function(element){
// 	// 			pullDormInfo('https://housing.columbia.edu'+element['attribs']['href']);
//   // 	})
//   // })

// }
// dormSweep(abc);
