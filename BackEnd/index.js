const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users')
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json())

app.use(cors());


mongoose.connect("mongodb+srv://mlasitsa:maxlas@schedulecluster.fdnhkev.mongodb.net/users")  


app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err,response) => {
                if(response) {
                    res.json("Success")
                } else {
                    res.json("The Password is incorrect")
                }
            })
        } else {
            res.json("You don't have an account")
        }
    })
})

app.post('/signup', (req, res) => {
    const {fullName, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UsersModel.create({fullName, email, password: hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
})


app.listen(3001, () => {
    console.log("server is running")
})