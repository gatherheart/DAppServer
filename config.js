
var mysql      = require('mysql');

var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'ubuntu',
      database : 'dapp'
});

connection.connect(function(err){
    if(!err) {
            console.log("Database is connected");
    } else {
            console.log("Error while connecting with database");
    }
});


// Reference to https://gist.github.com/jackey/5530591 
function twoDigits(d) {
        if(0 <= d && d < 10) return "0" + d.toString();
        if(-10 < d && d < 0) return "-0" + (-1*d).toString();
        return d.toString();
}
 
Date.prototype.toMysqlFormat = function() {
        return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

module.exports = connection; 

