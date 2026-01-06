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

app.get('/api/admin-get-user/:id', async (req, res) => {
    const adminId = req.params.id;
    const sql = "SELECT username FROM admin WHRE id = ?";

    dbconn.query(sql, [adminId], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error"});
        if(result.length > 0){
            return res.json({ username: result[0].username})
        }
    })
})


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
            // 2. Credentials are correct! Now update the status from 0 to 1
            const updateSql = "UPDATE admin SET status = 1 WHERE username = ?";
            
            dbconn.query(updateSql, [username], (updateErr) => {
                if (updateErr) {
                    console.error("Database Error (Update Status):", updateErr);
                    // We still send success: true because the login worked, 
                    // but we log the status update failure.
                    return res.status(500).json({ success: false, message: "Login okay, but status update failed" });
                }
                
                console.log(`Status updated to 1 for user: ${username}`);
                res.json({ success: true });
            });
         } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    });
});

app.post("/admin/logout", (req, res) => {
    const { username } = req.body;

    console.log("--- Logout Request ---");
    console.log("Received Username:", `|${username}|`); // Pipes show hidden spaces

    const sql = "UPDATE admin SET status = 0 WHERE username = ?";

    dbconn.query(sql, [username], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ success: false });
        }

        // result.affectedRows tells you if MySQL actually found that user
        if (result.affectedRows === 0) {
            console.log("⚠️ No user found in DB with that username. Nothing updated.");
            return res.json({ success: false, message: "User not found" });
        }

        console.log(`✅ Success: User ${username} status set to 0.`);
        res.json({ success: true });
    });
});

app.use((req, res)=>{
    res.status(404).send("error: route not found on express serve.r");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
    
})