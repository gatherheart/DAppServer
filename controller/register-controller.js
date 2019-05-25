// handling login router

var connection = require('../config');
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
var express = require("express");

module.exports.register = function(req, res) {
    
    console.log("req", req.body);

    var encrypted = cryptr.encrypt(req.body.password);
    var date = new Date();
    var registerDate = date.toMysqlFormat();
    date.setDate( date.getDate() + 30 );
    var expireDate = date.toMysqlFormat();

    var user = {
        "uname"     : req.body.name,
        "email"     : req.body.email,
        "password"  : encrypted,
        "register"  : registerDate,
        "expire"    : expireDate
    }
    
    connection.query('INSERT INTO user SET ?', user, function(err, result, fields){
        if(err){
            console.log("Error in query insertion");
            res.json({ status:false, code: 400, message: "Error in signIn" });
        }
        else {
            console.log("the solution is", result);
            res.json({ status:true, code: 200, message: "user registered successfully" });
    
        }
    } );
}


