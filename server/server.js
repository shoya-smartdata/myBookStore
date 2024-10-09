const express = require('express');

const app = express();
const  bookroute = require("./Routes/bookRoute")
require("dotenv").config();
const PORT = process.env.PORT
app.use(express.json());
const sequelize = require('./Config/db')


app.use("/api", bookroute)

app.listen(PORT, ()=>{
    console.log(`your server is running successfully ${PORT}`);
    
})