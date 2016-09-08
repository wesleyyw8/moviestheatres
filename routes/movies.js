var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * from MOVIES";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json({"movies" : rows});
      });
    });
  });
router.route('/:movieTitle')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * FROM MOVIES WHERE title = '"+request.params.movieTitle+"'";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json(rows);
      });
    });
  });

module.exports = router;
