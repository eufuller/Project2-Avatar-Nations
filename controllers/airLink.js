//require dependencies
const express = require("express")
const Air = require("../models/air.js")

const router = express.Router()


//air Index page of characters
router.get("/", (req, res) => {
    Air.find({}, (error, allNomads) => {
    res.render("air/index.ejs", {
        nomads: allNomads,
        })
    })
})

//Route to add New character
router.get("/new", (req, res) => {
    res.render("air/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    Air.findByIdAndRemove(req.params.id, () => {
        res.redirect("/air")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    Air.findByIdAndUpdate(req.params.id, req.body, (err, updatedNomad) => {
            res.redirect(`/air/${req.params.id}`)
        })
})

//Create functionality for New page
router.post('/', (req, res) => {
    Air.create(req.body, (error, createdNomad) => {
        res.redirect("/air")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    Air.findById(req.params.id, (error, foundNomad) => {
        res.render("air/edit.ejs", {air: foundNomad})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    Air.findById(req.params.id, (err, foundNomad) => {
        res.render("air/show.ejs", {nomad: foundNomad})
    })
})

//Export Router Object
module.exports = router