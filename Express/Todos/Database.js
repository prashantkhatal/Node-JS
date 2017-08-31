var mysql = require('mysql');

var config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my local'
};

var connection = mysql.createConnection(config);

module.exports = {
	execute(sql){
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, rows, fields) => {
	  			if (err)
	  				reject(err);

  				resolve(rows);
			});

		});
	}
};