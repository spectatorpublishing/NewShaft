var fs = require('fs');
var files = fs.readdirSync('../src/client/assets/floor_plans/');
var mysql = require('mysql');

var floor_dict = {}

for (var i = 0; i < files.length; i++) {
	var fn = files[i]
	var split = fn.split(" ")
	var splitMid = split[split.length-1].split(".")
	var splitLast = splitMid[0].split("_")

	if(splitLast[0] === "Basement" || splitLast[0] === "Mezzanine" || !isNaN(splitLast[0]) || splitLast[0] === "Floor" || splitLast[0] === "floor" || splitLast[0] === "Townhouses" || splitLast[0] === "Lobby") {
		split.pop()
		if (splitLast[0] === "Floor" || splitLast[0] === "floor" || splitLast[0] === "Townhouses" || splitLast[0] === "Lobby") {
			split.pop()
		}
		if (split[split.length-1] === "Townhouses") {
			split.pop()
			split.pop()
		}
		key = split.join(" ")

		if(key in floor_dict) {
			floor_dict[key].push(fn)
		} else {
			floor_dict[key] = [fn]
		}
	}

	else if(split[0] === "Carlton") {
		if("Carlton Arms" in floor_dict) {
			floor_dict["Carlton Arms"].push(fn)
		} else {
			floor_dict["Carlton Arms"] = [fn]
		}
	}
}

var con = mysql.createConnection({
	    host: "157.230.66.55",
  		user: "root",
  		password: "spec1877",
  		database: "dorms"
	});

for (key in floor_dict) {

	var sqlStatement = `INSERT INTO floor_plans (DORM`
	for (var i = 0; i < floor_dict[key].length; i++)
		sqlStatement += `, \`${i+1}\``

	sqlStatement += `) VALUES ("${key}", "${floor_dict[key][0]}"`
	for (var i = 1; i < floor_dict[key].length; i++)
		sqlStatement += `, "${floor_dict[key][i]}"`

	sqlStatement += `);`
	con.query(sqlStatement, function(err, res) {
			if (err) throw err;
		});
}

con.end();
