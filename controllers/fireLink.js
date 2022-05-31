//require dependencies
const express = require("express")
const fireDataBlueprint = require("../models/fire.js")

const router = express.Router()

//Routes
// router.get("/fire", (req, res) => {
//     fireDataBlueprint.deleteMany({}, (error, allfires) => {})
//     //fireDataBlueprint.create(AvatarSeed, (error, data) => {
//         res.redirect("/fire")
//     })
// })

//fire Index page of characters
router.get("/", (req, res) => {
    ///fireDataBlueprint.find({}, (error, allfires) => {
    res.render("fire/index.ejs")//, {fire: allfires,})
    //})
})

//Route to add New character
router.get("/new", (req, res) => {
    res.send("create new route is working") //res.render("fire/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    fireDataBlueprint.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/fire")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    fireDataBlueprint.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedfire) => {
            res.redirect(`/fire/${req.params.id}`)
        }
    )
})

//Create functionality for New page
router.post('/', (req, res) => {
    fireDataBlueprint.create(req.body, (error, createdfireling) => {
        res.redirect("/fire")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    fireDataBlueprint.findById(req.params.id, (error, foundfireling) => {
        res.send("route to edit page is working") //res.render("edit.ejs", {fire: foundfireling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    fireDataBlueprint.findById(req.params.id, (err, foundfireling) => {
        res.send("route to show pg. is working") //res.render("show.ejs", {fire: foundfireling})
    })
})

//Export Router Object
module.exports = router