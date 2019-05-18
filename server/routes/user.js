var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('ouai ouai');
})


module.exports = router;