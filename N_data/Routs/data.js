const express = require('express');
const data = express();
const mysql = require("mysql2");

var pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Parthu@13",
    database: "estore",
    multipleStatements: true
  });

   

data.get("/", (req, res) => {
  let productData;
  pool.query( "select * from products", (err, rows) =>{
            
          productData = rows;
        //   console.log(productData)
          res.status(200).send(productData)
        })
      });
  

module.exports = data;
