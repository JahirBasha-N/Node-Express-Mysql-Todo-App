const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node_todo_app",
  password: "1234",
});

module.exports = con;
