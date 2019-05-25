var express = require('express');
var router = express.Router();

router.get('/login.html', function(req, res){
        res.sendFile('/home/milkybean85/workSpace3/image/isc_image.png');       
});

router.get('/sign.html', function(req, res){
        res.sendFile('/home/milkybean85/workSpace3/image/user_image.png');       
});

module.exports = router;
