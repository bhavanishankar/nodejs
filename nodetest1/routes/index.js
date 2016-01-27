var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST Web App with NodeJS, Express, Mongodb' });
});

module.exports = router;
