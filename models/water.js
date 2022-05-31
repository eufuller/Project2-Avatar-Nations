const mongoose = require("mongoose")

const waterSchema = new mongoose.Schema({
    indexImg: String,
    showImg: String,
    indexName: {type: String, required: true},
    fullName: {type: String},
    age: {type: String, required: true},
    interestingFact: {type: String, required: true}
})

const waterDataBlueprint= mongoose.model("water", waterSchema)

module.exports = waterDataBlueprint;