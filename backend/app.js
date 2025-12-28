const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const mysql = require("mysql2")
const { log } = require("console")

app.use(cors())
app.use(express.json())

const dbconn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database :  "ecommerce",
})

dbconn.connect((err)=>{
    if(err)
        console.log(err);
        console.log("Mysql connected successfully");
})

app.get("/admin/login", (req, res) => {
    console.log("admin login");
    res.send("Admin login page placeholder");
})

app.post("/admin/login", (req, res ) => {
    const {username, password} = req.body;

    const sql = "SELECT * FROM admin WHERE username = ? AND passwprd = ?";

    db.query(sql, [username, password], (err, result) => {
        if(err) {
            return res.status(500).json({success:fasle});
        }

        if(result.length > 0) {
            res.json({success: true});
        }
        else{
            res.json({success: fasle});
        }
    });
});

app.use((req, res)=>{
    res.status(404).send("error: route not found on express serve.r");
});

app.listen(3000, () => {
    console.log("server running on port");
    
})