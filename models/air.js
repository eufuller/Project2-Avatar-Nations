const mongoose = require("mongoose")

const airSchema = new mongoose.Schema({
    indexImg: String,
    showImg: String,
    indexName: {type: String, required: true},
    fullName: {type: String},
    age: {type: String, required: true},
    interestingFact: {type: String, required: true}
})

const Air= mongoose.model("air", airSchema)

module.exports = Air;