const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    degree: {
        type: String,
        required: false 
    },
    year: {
        type: String,
        required: false 
    },
    major: {
        type: String,
        required: false 
    },
    minor: {
        type: String,
        required: false 
    }
})

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel