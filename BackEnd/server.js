
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "signup",
    port: 3307
})

app.post('/signup/signedup_users', (req,res) => {

    const {name, email, password } = req.body;
    const sql = "INSERT INTO login (`name`, `email`,`password`) VALUES (?, ?, ?)";
    

    db.query(sql, [name, email, password], (err, data) => {
        if(err) {
            console.error(err);
            return res.json("Error")
        }
        return res.json(data);
    } )
})

app.listen(3308, () => {
    console.log('listening')
})