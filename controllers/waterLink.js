//require dependencies
const express = require("express")
const Water = require("../models/water.js")

const router = express.Router()

//Routes
// router.get("/water", (req, res) => {
//     Water.deleteMany({}, (error, allwaters) => {})
//     //Water.create(AvatarSeed, (error, data) => {
//         res.redirect("/water")
//     })
// })

//water Index page of characters
router.get("/", (req, res) => {
    Water.find({}, (error, allwaters) => {
    res.render("water/index.ejs", {waterlings: allwaters,})
    })
})

//Route to add New character
router.get("/new", (req, res) => {
    res.render("water/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    Water.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/water")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    Water.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedwater) => {
            res.redirect(`/water/${req.params.id}`)
        }
    )
})

//Create functionality for New page
router.post('/', (req, res) => {
    Water.create(req.body, (error, createdwaterling) => {
        res.redirect("/water")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    Water.findById(req.params.id, (error, foundwaterling) => {
        res.render("water/edit.ejs", {waterling: foundwaterling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    Water.findById(req.params.id, (err, foundwaterling) => {
        res.render("show.ejs", {waterling: foundwaterling})
    })
})

//Export Router Object
module.exports = router