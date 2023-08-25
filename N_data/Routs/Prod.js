const express = require('express');
const prod = express();
const mysql = require("mysql2");

var pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Parthu@13",
    database: "estore",
    multipleStatements: true
  });

  prod.get("/", (req, res) =>{
    let categorydata; 
    
    
    pool.query("select *  from categories", (error, categories) =>{
    categorydata = categories;
    res.status (200).send(categorydata);
    })
});  

// prod.get("/products", (req, res) => {
//   let productData;
//   pool.query( "select * from products", (err, rows) =>{
            
//           productData = rows;
//           console.log(productData)
//           res.status(200).send(productData)
//         })
//       });
  

module.exports = prod;
