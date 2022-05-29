const mongoose = require("mongoose")

const avatarSchema = new mongoose.Schema({
    img: String,
    name: {type: String, required: true},
    age: {type: Number, required: true},
    interestingFact: {type: String, required: true}
})

const Avatar= mongoose.model("Avatar", avatarSchema)

module.exports = Avatar;