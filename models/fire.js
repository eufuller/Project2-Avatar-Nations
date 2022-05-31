const mongoose = require("mongoose")

const fireSchema = new mongoose.Schema({
    indexImg: String,
    showImg: String,
    indexName: {type: String, required: true},
    fullName: {type: String},
    age: {type: String, required: true},
    interestingFact: {type: String, required: true}
})

const fire= mongoose.model("fire", fireSchema)

module.exports = fire;