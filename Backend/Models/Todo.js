const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
    },
    description:{
        type: String,
        maxLength: 100
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Todo",todoSchema);