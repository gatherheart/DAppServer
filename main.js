// Reference to http://coding-karma.com/2017/08/12/creating-login-registration-using-nodejs-mysql/
// Created by Hyun
// Login and SignIn with Nodejs & mysql

var express = require('express');
var bodyParser = require('body-parser');
var registerController = require('./controller/register-controller');
var authenticateController=require('./controller/authenticate-controller');
var router = express.Router();

// Body parser using json type
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname, "start from");
// image router 
var image = require('./router/image_router');
app.use('/image', image);

// user router
var user = require('./router/user_router');
app.use('/user', user);

// isc router 
var isc = require('./router/isc_router');
app.use('/isc', isc);

// basic functions = login and sign or default page

app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
}); 

app.get('/sign.html', function (req, res) {
    res.sendFile(__dirname + "/" + "sign.html" );    
});  

app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
}); 


/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controller/register-controller', registerController.register);
app.post('/controller/authenticate-controller', authenticateController.authenticate);

app.listen(3000);

