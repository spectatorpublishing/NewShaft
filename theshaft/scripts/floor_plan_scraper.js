const rp = require('request-promise');
const $ = require('cheerio');
const https = require('https');
const fs = require('fs');

const url = 'https://housing.columbia.edu/housing-options/explore-residences';
const base_url = 'https://housing.columbia.edu/'

function grabFloorplans(end){
  rp(base_url+end)
    .then((html) =>{
      return $('.field-name-field-residence-floor-plans', '.group-right', html).find('a').toArray();
    })
    .then((image) => {
      image.forEach((elem) => {
        var file = fs.createWriteStream("../src/client/assets/floor_plans/" + elem['attribs'][['title']]+".jpg", {flags: "w"});
        var request = https.get(elem['attribs']['href'], function(response) {
          response.pipe(file);
        });
      })
    })
    .catch(function(err){
      console.error(err)
    });
}


rp(url)
  .then(function(html){
    //success!
    return $('#region-sidebar-second', html).find('a').toArray();
  })
  .then((dorm_list) => {
    dorm_list.forEach((elem) => {
      console.log(elem['attribs']['href'])
      grabFloorplans(elem['attribs']['href'])
    })
  })
  .catch(function(err){
    console.error(err)
  });
