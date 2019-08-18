// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "b3lns32qshskaajm",
  password: "ap5p8h1t5gon5c6a",
  database: "j2p0ctgiin4fq1cq"
});

// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "eatDaBurger_db"
//   });
// };



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
