var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(request,response){
    var teste = ["a", "b", "c", "d", ":D"];
    getConnection(function(error, con){
      if(error) throw error;
      var query = "SELECT * from MOVIES";
      con.query(query,function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        response.json({"enderecos" : rows});
      });
    });
  });

module.exports = router;
