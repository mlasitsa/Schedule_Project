const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "admin",
    database: "signup"
})
