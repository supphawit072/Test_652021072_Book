const mongoose = require("mongoose");

// Define Schame wit timestamps and disable versionKey

// Define Model

// Export Model
const  bookScema =new mongoose.Schema({
    title :{type:String,require:true},
    author :{type:String,require:true},
    published_year :{type:Number,require:true},
    genre :{type:String,require:true},
    available :{type:Boolean,require:true},
},{versionKey:false,timestamps:true});
const Books = mongoose.model("Books",bookScema)
module.exports = Books;