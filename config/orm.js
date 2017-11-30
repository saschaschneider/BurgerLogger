// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  allCharacters: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single burger in the table.
  // Again, we make use of the callback to grab a specific burger from the database.
  searchCharacter: function(name, callback) {
    var s = "select * from " + tableName + " where routeName=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for adding burgers to the database
  // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
  addCharacter: function(burgers, callback) {

    // Creating a routeName so its easy to search.
    var routeName = burgers.burger_name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);

    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";

    connection.query(s, [burger_name, devoured], function(err, result) {
      callback(result);
    });

  }

};

module.exports = orm;

