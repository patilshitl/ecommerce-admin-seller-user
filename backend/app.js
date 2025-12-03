const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path')
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

app.get("/admin_login", (req, res) => {
    console.log("hello");

    res.send("Admin Login Page Placeholder");
})


app.use((req, res) => {
    // If the request makes it here, the route wasn't matched.
    res.status(404).send("Error: Route not found on Express server.");
});


app.listen(3000, () =>{
    console.log("Server running on port 3000");
})