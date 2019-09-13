'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'cpdlc_web',
    password : 'dsnadoteyss3',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;