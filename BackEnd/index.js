const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users')

const app = express();
app.use(express.json())

app.use(cors());


mongoose.connect("mongodb+srv://mlasitsa:maxlas@schedulecluster.fdnhkev.mongodb.net/users")  


app.post('/signup', (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            }else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("You don't have an account")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})