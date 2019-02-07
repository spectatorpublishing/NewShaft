const rp = require('request-promise');
const $ = require('cheerio');
const https = require('https');
const fs = require('fs');
var a={};
var amen;
var hello;
const abc= 'https://housing.columbia.edu/housing-options/explore-residences';
console.log("testings");
var pullDormInfo= function(url){
	bb=url.split("/");
	test=bb[bb.length-1];
	test=test.substring(0,test.length)
	console.log()
	rp(url)
	  .then(function(html){
	    const carlton_data = {};
	      var amenities=$('.field-label', html).text();
	      amen= amenities.split(":")
	      amen.pop();
	      for(g=1; g<amen.length; g++){
	      	amen[g]=amen[g].substring(1)
	      }
	      console.log(amen);
	      amen.forEach(function(element){
			hello=$(`.field-label:contains(${element}) ~ .field-items:not(p)`, html);
			hello=hello.text().trim()
			a[(" "+element)]=hello;
		  })
	      console.log(a);
	    }).catch(function(err){
	    console.log("error");
	  }).then(function(){
	  	var file = fs.createWriteStream( test+ ' data'+".json");
		file.on('open', function(fd) {
	        file.write(JSON.stringify(a),function(err){file.end();});
	        });
	}).then(function(){
		console.log("hello I'm testing shit")
	});
}

var dormSweep =function(url){
	var dorm_list;
	rp(url)
  .then(function(html){
    //success!
    dorm_list= $('#region-sidebar-second', html).find('a').toArray();
    console.log(dorm_list)
  }).then(function(err){
  		dorm_list.forEach(function(element){
  			console.log(element['attribs']['href']);
      		pullDormInfo('https://housing.columbia.edu'+element['attribs']['href']);
  	})
  })

}
dormSweep(abc);
