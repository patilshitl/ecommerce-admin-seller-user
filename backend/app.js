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


dbconn.connect((err) => {
    if (err) {
        console.error("MySQL Connection Failed:", err.message);
    } else {
        console.log("MySQL connected successfully");
    }
});

app.get("/admin/login", (req, res) => {
    console.log("admin login");
    res.send("Admin login page placeholder");
})

// app.post("/admin/login", (req, res ) => {
//     const {username, password} = req.body;

//     const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";

//     dbconn.query(sql, [username, password], (err, result) => {
//         if(err) {
//             return res.status(500).json({success:false});
//         }

//         if(result.length > 0) {
//             res.json({success: true});
//         }
//         else{
//             res.json({success: false});
//         }
//     });
// });

app.post("/admin/login", (req, res) => {
    const { username, password } = req.body;

    console.log("--- Login Attempt ---");
    console.log("Received Username:", `|${username}|`); // Pipes show hidden spaces
    console.log("Received Password:", `|${password}|`);

    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";

    dbconn.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ success: false, message: err.message });
        }

        if (result.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    });
});

app.use((req, res)=>{
    res.status(404).send("error: route not found on express serve.r");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
    
})