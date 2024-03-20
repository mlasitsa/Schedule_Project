const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema({
    // Add here all the info for classes
    // Add ref for users that techincally will be an array of objects I guess 
    /* users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }] */
})

const Classes = mongoose.model('classes', ClassesSchema);
module.exports = Classes;