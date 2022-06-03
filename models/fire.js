const mongoose = require("mongoose")

const fireSchema = new mongoose.Schema({
    indexImg: {type: String, required: true},
    showImg: String,
    indexName: {type: String, required: true},
    fullName: {type: String},
    age: {type: String, required: true},
    interestingFact: {type: String, required: true}
})

const Fire= mongoose.model("fire", fireSchema)

module.exports = Fire;