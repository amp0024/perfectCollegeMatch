var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // database call to get addresses
  // [{ name: 'Some Restaurant', address: '123 Main St' }]
  var addresses = ['10261 Macedonia Street', '6350 South Havana Street'];
  res.render('index', { title: 'Express', addresses: addresses });
});

module.exports = router;
