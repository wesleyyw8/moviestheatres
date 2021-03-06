var express = require('express');
var mysql = require("mysql");
var app = express();
var port = 3000;

var pool  =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'MOVIES_PROJECT',
    debug    :  false
});

getConnection = function(callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }
    callback(err, connection);
  });
};

var movies = require('./routes/movies');
app.use('/movies', movies);

var theatres = require('./routes/theatres');
app.use('/theatres', theatres);

var showtime = require('./routes/showtime');
app.use('/showtime', showtime);

app.use(express.static(__dirname + '/ui')); 
app.get('/', function(request,response){
  response.sendFile(__dirname + '/ui/views/index.html');
});

app.listen(port, function(){
  console.log('funcionando na porta: '+port);
});