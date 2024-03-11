const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser'); 


const app = express();
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true
}));
app.use(cookieParser()); 


mongoose.connect("mongodb+srv://mlasitsa:maxlas@schedulecluster.fdnhkev.mongodb.net/users")  

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json('The token was not avaliable')
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if(err) return res.json("Token is not correct")
            req.user = decoded;
            next()
        })
    }
}



app.get('/', verifyUser, (req, res) => {
    return res.json("Success")
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err,response) => {
                if(response) {
                    const token = jwt.sign({email: user.email}, 'jwt-secret-key', {expiresIn: '24h'})
                    res.cookie('token', token);
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


app.patch('/updateProfile', verifyUser, async (req, res) => {
    const { degree, year, major, minor } = req.body;
    const userEmail = req.user.email; 

    try {
        const updatedUser = await UsersModel.findOneAndUpdate(
            { email: userEmail }, 
            { $set: { degree, year, major, minor }},
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json("User not found.");
        }

        res.json(updatedUser); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/getStudentInfo', verifyUser, async(req, res) => {
    const userEmail = req.user.email; 

    try {
        const userInfo = await UsersModel.findOne({ email: userEmail });
        if (!userInfo) {
            return res.status(404).json("User not found");
        }

        const { degree, year, major, minor } = userInfo;
        res.json({ degree, year, major, minor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3001, () => {
    console.log("server is running")
})