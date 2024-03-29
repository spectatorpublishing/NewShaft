const rp = require('request-promise');
const $ = require('cheerio');
const https = require('https');
const fs = require('fs');
const abc= 'https://housing.columbia.edu/housing-options/explore-residences';

var pullDormInfo= function(url){
	rp(url)
	  .then(function(html){
			bb=url.split("/");
			test=bb[bb.length-1];
			test=test.substring(0,test.length)
			var a = {};
	    const carlton_data = {};
			var amenities=$('.field-label', html).text();
			var amen= amenities.split(":")
			amen.pop();
			for(g=1; g<amen.length; g++){
				amen[g]=amen[g].substring(1)
			}
			var hello;
			amen.forEach(function(element){
				hello=$(`.field-label:contains(${element}) ~ .field-items:not(p)`, html);
				hello=hello.text().trim()
				a[(" "+element)]=hello;
			})
			return [a, test];
			}).catch(function(err){
			})
		.then((mats) => {
			var a = mats[0];
			var test = mats[1];
			var file = fs.createWriteStream("../db/DormJSONS/" + test + '_data'+".json");
			file.on('open', function(fd) {
				file.write(JSON.stringify(a),function(err){file.end();});
			});
		}).then(function(){
		});
}

var dormSweep =function(url){
	var dorm_list;
	rp(url)
  .then(function(html){
    //success!
    return dorm_list= $('#region-sidebar-second', html).find('a').toArray();
  }).then((dorm_list) => 	{
  		dorm_list.forEach(function(element){
				pullDormInfo('https://housing.columbia.edu'+element['attribs']['href']);
  	})
  })

}
dormSweep(abc);
