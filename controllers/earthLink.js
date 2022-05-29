//require dependencies
const express = require("express")
const earth = require("../models/avatar.js")

const router = express.Router()

//Routes
// router.get("/earth", (req, res) => {
//     Avatar.deleteMany({}, (error, allEarths) => {})
//     //Avatar.create(AvatarSeed, (error, data) => {
//         res.redirect("/earth")
//     })
// })

//Earth Index page of characters
router.get("/", (req, res) => {
    Avatar.find({}, (error, allEarths) => {
    res.send("earth index is up") //res.render("index.ejs", {earth: allEarths,})
    })
})

//Route to add New character
router.get("/new", (req, res) => {
    res.send("create new route is working") //res.render("new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    Avatar.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/earth")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    Avatar.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedEarth) => {
            res.redirect(`/earth/${req.params.id}`)
        }
    )
})

//Create functionality for New page
router.post('/', (req, res) => {
    Avatar.create(req.body, (error, createdEartling) => {
        res.redirect("/earth")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    Avatar.findById(req.params.id, (error, foundEarthling) => {
        res.send("route to edit page is working") //res.render("edit.ejs", {earth: foundEarthling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    Avatar.findById(req.params.id, (err, foundEarthling) => {
        res.send("route to show pg. is working") //res.render("show.ejs", {earth: foundEarthling})
    })
})

//Export Router Object
module.exports = router