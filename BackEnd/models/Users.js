const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

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
    },
    todos: [TodoSchema]
})

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel