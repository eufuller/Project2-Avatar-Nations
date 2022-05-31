const mongoose = require("mongoose")

const fireSchema = new mongoose.Schema({
    img: String,
    name: {type: String, required: true},
    age: {type: Number, required: true},
    interestingFact: {type: String, required: true}
})

const fireDataBlueprint= mongoose.model("fire", fireSchema)

module.exports = fireDataBlueprint;