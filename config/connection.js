const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "43Aruzap*",
    database: "burgers_db"
});

// Make connection
connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;