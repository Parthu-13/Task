const express = require('express');
const app = express();
const prod = require("./Routs/Prod")
const data = require("./Routs/data")
const cors = require("cors")

app.use(cors())
app.use("/nav" , prod)
app.use("/products" , data)
const port = 5001;
const ser = app.listen(port, ()=>{
    console.log("Vavaliya Parth")
})