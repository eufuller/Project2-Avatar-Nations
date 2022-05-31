const mongoose = require("mongoose")

const waterSchema = new mongoose.Schema({
    img: String,
    name: {type: String, required: true},
    age: {type: Number, required: true},
    interestingFact: {type: String, required: true}
})

const waterDataBlueprint= mongoose.model("water", waterSchema)

module.exports = waterDataBlueprint;