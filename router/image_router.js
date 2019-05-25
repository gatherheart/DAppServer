var express = require('express');
var router = express.Router();

router.get('/isc_image.png', function(req, res){
        res.sendFile('/home/milkybean85/workSpace3/image/isc_image.png');       
});

router.get('/user_image.png', function(req, res){
        res.sendFile('/home/milkybean85/workSpace3/image/user_image.png');       
});

module.exports = router;
