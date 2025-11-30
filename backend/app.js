const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql2")

app.use(cors())
app.use(express.json())

const dbconn = mysql.createConnection({
    host : "ciacloud.in",
    user : "tpuser",
    password : "%TGBbgt5",
    database : "tpdb"
})

dbconn.connect((err)=> {
    if(err)
        console.log(err);
    console.log("mysql connected successfully");
    
})