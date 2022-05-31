const mongoose = require("mongoose")

const airSchema = new mongoose.Schema({
    img: String,
    name: {type: String, required: true},
    age: {type: Number, required: true},
    interestingFact: {type: String, required: true}
})

const airDataBlueprint= mongoose.model("air", airSchema)

module.exports = airDataBlueprint;