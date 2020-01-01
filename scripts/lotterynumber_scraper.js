var request = require('request');
var cheerio = require('cheerio');

var allDorms = {};

request('https://housing.columbia.edu/room-selection/tips-and-tools/resources', function (error, response, html) 
{
    var $ = cheerio.load(html);
    $('tr').each(function(i, element)
    {
        if (i == 0)
            return true;
        var data = $(this).children();
        var title = $(data).eq(0).text().split(" -");
        var dorm = title[0].trim();
        var suiteType = title[1].trim();
        var cutoff1 = $(data).eq(1).text();
        var cutoff2 = $(data).eq(2).text();

        if (!(dorm in allDorms))
        {
            allDorms[dorm] = {};
        }
        allDorms[dorm][suiteType] = cutoff2;
    });
    var keys = Object.keys(allDorms);
});
