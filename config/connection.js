// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com,
//   port: 3306,
//   user: "rykz1l0vw0wjxugx",
//   password: "mh4c3iiq6jtbzihx",
//   database: "vz9grcsvruy8yas0"
// });


var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "eatDaBurger_db"
  });
};



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
