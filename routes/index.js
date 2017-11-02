var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var connection=mysql.createPool({
		host:'localhost',
		user:'root',
		password: '123456',
		database:'sou'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*")
  var a=req.body.wrap;
  	connection.query('SELECT * FROM sou WHERE name LIKE "%'+a+'%"', function(err, rows, fields) {
		res.send(rows)
	});
});

module.exports = router;
