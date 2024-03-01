const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config()

const PORT = 5000;

dbConnect();

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 


app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });