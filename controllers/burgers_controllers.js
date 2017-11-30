// *********************************************************************************
// BURGERS-CONTROLLERS.JS - THIS FILE INITIATES THE LOGIC OF ROUTING
// *********************************************************************************

var express = require('express'); // server
var router = express.Router(); // routing
var burgers = require('../models/burger.js'); // requiere burgers.js, which holds the burger specific ORM functions 


// set home route i.e. if user calls http://localhost:3000/
router.get('/', function(req,res) {
	res.redirect('/burgers') 
});

//hbs = handelsbars 
//source: https://www.npmjs.com/package/hbs

router.get('/burgers', function(req,res) {
	burgers.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

// New Burger creation
router.post('/burgers/create', function(req,res) {
	burgers.create(['name'], [req.body.name], function(data){
		burgers.redirect('/burgers')
	});
});

//Back to Burger

router.put('/burgers/devour/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('burgers', condition);

	burgers.devour({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect('/burgers');
	});
});

//ROUTE FOR DELETE // Devour a Burger
router.delete('/burgers/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	cat.delete(condition, function(data){
		res.redirect('/burgers');
	});
});


// Export routes
module.exports = router;