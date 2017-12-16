var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chris Nelson', subtitle:"International dIrector of photography" });
});

module.exports = router;
