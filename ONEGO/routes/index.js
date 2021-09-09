var express = require('express');
const { appendFile } = require('fs');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload');
});

module.exports = router;
