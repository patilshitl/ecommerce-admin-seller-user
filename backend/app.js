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


// Admin

app.get("/admin/login", (req, res) => {
    console.log("admin login");
    res.send("Admin successfuly login");
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


// Seller

app.get("/seller/login", (req, res) => {
    console.log("seller login");
    res.send("Seller successfully login")
})

app.get("/seller/register", (req, res) => {
    console.log("seller register");
    res.send("Seller successfully register")
})

app.post("/seller/register", (req, res) => {
    const sql = "INSERT INTO seller (name, phone, business, email, password) VALUES (?)"

    const values = [
        req.body.name,
        req.body.phone,
        req.body.business,
        req.body.email,
        req.body.password 
    ];

    dbconn.query(sql, [values], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                Error: "Inserting data failed"
            });
        }
        return res.json({Status: "Success"});
    });
});

app.post("/seller/login", (req, res) => {
    const sql = "Select * FROM  seller WHERE email = ? AND password = ?";

    dbconn.query(sql, [req.body.email, req.body.password], (err, result) =>{
        if (err) return res.json({ Status: "Error", Error: "Database error" });

        if (result.length > 0) {
            return res.json({
                Status: "Success",
                id: result[0].id,
                username: result[0].name
            });
        } else {
            return res.json({Status: "Error", Error: "Wrong email or password" });
        }
    });
});

app.get("seller/dashboard/:id", (req, res) => {
    const loggedId = req.params.id;
    const sql = "Select * from seller Where id = ?";

    dbconn.query(sql, [loggedId], (err, result) => {
        if (err){
            console.error(err);
            return res.status(500).json({Error: "Database error"});
        }
        if(result.length > 0){
            return res.json({Status: "Success", Data: result[0]});
        } else {
            return res.status(404).json({Error: "User not found"});
        }
    })
})

app.use((req, res)=>{
    res.status(404).send("error: route not found on express serve.r");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
    
})