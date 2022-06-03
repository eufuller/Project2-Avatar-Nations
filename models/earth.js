const mongoose = require("mongoose")


const earthSchema = new mongoose.Schema({
    indexImg: {type: String, required: true},
    showImg: String,
    indexName: {type: String, required: true},
    fullName: {type: String},
    age: {type: String, required: true},
    interestingFact: {type: String, required: true}
})

const Earths= mongoose.model("Earths", earthSchema)

module.exports = Earths;