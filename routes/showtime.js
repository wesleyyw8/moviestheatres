var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * from show_time";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json({"showtime" : rows});
      });
    });
  });
router.route('/:id')
  .get(function(request,response){
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * FROM show_time WHERE id = '"+request.params.id+"'";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        response.json(rows);
      });
    });
  });

module.exports = router;
