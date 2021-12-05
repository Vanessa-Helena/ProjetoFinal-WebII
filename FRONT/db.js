var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password',
  port     : '3306',
  database : 'database_development'
});

class Db{
  constructor(){
    this.mysql      = require('mysql');
    this.connection = this.createconn()
  }
  
  createconn(){
    this.mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : 'password',
      port     : '3306',
      database : 'database_development'
    })
  }
  insert(s){
    connection.connect();
    return new Promise(function(resolve, reject){
      connection.query(s, function(err, result, fields) {
        if (err) throw err;
        resolve({"success": result.affectedRows == 1})
      });
      connection.end();
    })
  }

  select(s){
    connection.connect();
    return new Promise(function(resolve, reject){
      connection.query(s, function(err, result, fields) {
        if (err) throw err;
        resolve(result)
      });
      connection.end();
    })
  }

  update(s){
    connection.connect();
    return new Promise(function(resolve, reject){
      connection.query(s, function(err, result, fields) {
        if (err) throw err;
        resolve({"success": result.affectedRows >= 1})
      });
      connection.end();
    })
  }

  delete(s){
    connection.connect();
    return new Promise(function(resolve, reject){
      connection.query(s, function(err, result, fields) {
        if (err) throw err;
        resolve({"success": result.affectedRows >= 1})
      });
      connection.end();
    })
  }
}



module.exports = Db;

