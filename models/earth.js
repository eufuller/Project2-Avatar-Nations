const mongoose = require("mongoose")

const earthSchema = new mongoose.Schema({
    img: String,
    name: {type: String, required: true},
    age: {type: Number, required: true},
    interestingFact: {type: String, required: true}
})

const earthDataBlueprint= mongoose.model("earth", earthSchema)

module.exports = earthDataBlueprint;