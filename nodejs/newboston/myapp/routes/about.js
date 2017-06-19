var express = require('express');
var router = express.Router();

/* GET about */
router.get('/', function(req, res, next) {
  res.render('about', { 
      name: 'Jared',
      title: 'About'
  });
});

module.exports = router;
