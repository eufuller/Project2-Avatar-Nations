//require dependencies
const express = require("express")
const airDataBlueprint = require("../models/air.js")

const router = express.Router()

//Routes
// router.get("/air", (req, res) => {
//     airDataBlueprint.deleteMany({}, (error, allairs) => {})
//     //airDataBlueprint.create(AvatarSeed, (error, data) => {
//         res.redirect("/air")
//     })
// })

//air Index page of characters
router.get("/", (req, res) => {
    ///airDataBlueprint.find({}, (error, allairs) => {
    res.render("air/index.ejs")//, {air: allairs,})
    //})
})

//Route to add New character
router.get("/new", (req, res) => {
    res.send("create new route is working") //res.render("air/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    airDataBlueprint.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/air")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    airDataBlueprint.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedair) => {
            res.redirect(`/air/${req.params.id}`)
        }
    )
})

//Create functionality for New page
router.post('/', (req, res) => {
    airDataBlueprint.create(req.body, (error, createdairling) => {
        res.redirect("/air")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    airDataBlueprint.findById(req.params.id, (error, foundairling) => {
        res.send("route to edit page is working") //res.render("edit.ejs", {air: foundairling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    airDataBlueprint.findById(req.params.id, (err, foundairling) => {
        res.send("route to show pg. is working") //res.render("show.ejs", {air: foundairling})
    })
})

//Export Router Object
module.exports = router