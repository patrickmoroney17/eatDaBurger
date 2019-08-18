// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gldptqjwcahqnj9k",
  password: "eku7mq2tkpathss7",
  database: "ezb1rxqrg63xnqg4"
});

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
