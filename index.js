const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config()

const PORT = 5000;
const authRouter = require("./routes/authRoute");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 

app.use("/api/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });