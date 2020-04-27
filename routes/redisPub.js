var express = require('express');
var redis = require('redis');
var router = express.Router();

var publisher = redis.createClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var key = req.param('k');
  var value = req.param('v');
  
  publisher.set(key, value , function(){});

  var fb =  publisher.get(key, redis.print);

  publisher.get(key, function(err, reply) {
    // reply is null when the key is missing
    res.status(200).send({'key': key, 'value': reply});
  });

  

});

module.exports = router;
