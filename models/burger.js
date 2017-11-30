// *********************************************************************************
// BURGER.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var orm = require("../config/orm");

// We are using async() functions here, i.e. 

// async function name([param[, param[, ... param]]]) {
//    statements
// }

// source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// since you can use "=>" instead of writing "function", we will do so here. 


var burger = {
  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
