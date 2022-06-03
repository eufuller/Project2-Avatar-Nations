//require dependencies
const express = require("express")
const Earths = require("../models/earth.js")

const router = express.Router()

//Earth Index page of characters
router.get("/", (req, res) => {
    Earths.find({}, (error, allEarthlings) => {
    res.render("earth/index.ejs", {
        earthlings: allEarthlings,
        })
    })
})

//Route to add New character
router.get("/new", (req, res) => {
    res.render("earth/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    Earths.findByIdAndRemove(req.params.id, () => {
        res.redirect("/earth")
    })
})

//Update functionality for Edit page
router.put('/:id', (req, res) => {
    Earths.findByIdAndUpdate(req.params.id, req.body, (error, updatedEarthling) =>{
        res.redirect(`/earth/${req.params.id}`)
    })
})

//Create functionality for New page
router.post('/', (req, res) => {
    Earths.create(req.body, (error, createdEarthling) => {
        res.redirect("/earth")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    Earths.findById(req.params.id, (error, foundEarthling) => {
        res.render("earth/edit.ejs", {earth: foundEarthling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    Earths.findById(req.params.id, (err, foundEarthling) => {
        res.render("earth/show.ejs", {earthling: foundEarthling})
    })
})

//Export Router Object
module.exports = router