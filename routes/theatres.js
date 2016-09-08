var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * from THEATRES";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json({"theatres" : rows});
      });
    });
  });
router.route('/:theatreName')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * FROM THEATRES WHERE title = '"+request.params.theatreName+"'";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json(rows);
      });
    });
  });

module.exports = router;
