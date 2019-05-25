// Reference to http://coding-karma.com/2017/08/12/creating-login-registration-using-nodejs-mysql/
// Created by Hyun
// Login and SignIn with Nodejs & mysql

var express = require('express');
var bodyParser = require('body-parser');
var registerController = require('./controller/register-controller');
var authenticateController=require('./controller/authenticate-controller');

// Body parser using json type
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// login and sign or default page

app.get('/', function (req, res) {  
       res.sendFile( __dirname + "/" + "index.html" );  
})  

app.get('/login.html', function (req, res) {  
       res.sendFile( __dirname + "/" + "login.html" );  
}) 


/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controller/register-controller', registerController.register);
app.post('/controller/authenticate-controller', authenticateController.authenticate);

app.listen(3000);

