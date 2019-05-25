var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');

var connection = require('./../config');

module.exports.authenticate = function(request, response){

    var email = request.body.email;
    var password = request.body.password;

    connection.query('SELECT * FROM user WHERE email = ?', [email], 
        function(error, result, fields){
            if(error)
                response.json({status: false, message: 'there are some error'});
            else{
                console.log(result);
                if(result.length > 0){
                    decrypted = cryptr.decrypt(result[0].password);
                    if(password == decrypted){
                        response.json({status: true, message: 'succesfully login'});
                    }
                    else{
                        response.json({status: false, message: 'Email and password does not match'});
                    }
                }
                else{
                    response.json({status: false, message: 'Email does not exist'});
                }
            }
        }
    );

}

