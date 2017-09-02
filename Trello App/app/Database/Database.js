var mysql = require('mysql');

var config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'trello app'
};

var connection = mysql.createConnection(config);

module.exports = {
	execute(sql, callback){
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, rows, fields) => {
	  			if (err)
	  				reject(err);

  				resolve(rows);
			});

		}).then( callback, callback);
	}
};