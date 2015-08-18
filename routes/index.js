var express = require('express');
var router = express.Router();

var SteamID = require('steamid');

// my actual steam id
var sid = new SteamID('76561198062707855');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Steam Friends Manager',
  	stuff: sid });
});

module.exports = router;
