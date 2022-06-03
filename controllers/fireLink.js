//require dependencies
const express = require("express")
const Fire = require("../models/fire.js")

const router = express.Router()


//fire Index page of characters
router.get("/", (req, res) => {
    Fire.find({}, (error, allfires) => {
    res.render("fire/index.ejs", {firelings: allfires,})
    })
})

//Route to add New character
router.get("/new", (req, res) => {
    res.render("fire/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    Fire.findByIdAndRemove(req.params.id, () => {
        res.redirect("/fire")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    Fire.findByIdAndUpdate(req.params.id, req.body, (err, updatedfireling) => {
            res.redirect(`/fire/${req.params.id}`)
        })
})

//Create functionality for New page
router.post('/', (req, res) => {
    Fire.create(req.body, (error, createdfireling) => {
        res.redirect("/fire")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    Fire.findById(req.params.id, (error, foundfireling) => {
        res.render("fire/edit.ejs", {fireling: foundfireling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    Fire.findById(req.params.id, (err, foundfireling) => {
        res.render("fire/show.ejs", {fireling: foundfireling})
    })
})

//Export Router Object
module.exports = router