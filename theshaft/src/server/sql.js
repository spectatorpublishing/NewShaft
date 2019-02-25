var mysql = require('mysql');

var con = mysql.createConnection({
  host: "157.230.66.55",
  user: "root",
  password: "spec1877",
  database: "dorms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  dorms = ["John Jay", "Carman", "Hartley", "Furnald"];
  numRooms = [1, 2, 3, 4, 5, 6];
  ac = [0, 1];
  toilets = [1, 4];
  for(var a = 0; a < dorms.length; a++) {
  	for(var b = 0; b < numRooms.length; b++) {
  		for(var c = 0; c < ac.length; c++) {
  			for(var d = 0; d < toilets.length; d++) {
  				var sql = `INSERT INTO Test (dorm, number_of_rooms, ac, toilet_person_ratio) VALUES ('${dorms[a]}', ${numRooms[b]}, ${ac[c]}, ${toilets[d]})`;
  				con.query(sql, function(err, res) {
				  	if (err) throw err;
				  	console.log("inserted!");
				  });
  			}
  		}
  	}
  }
});