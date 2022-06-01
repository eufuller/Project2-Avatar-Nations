const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const earthController = require("./controllers/earthLink")
const waterController = require("./controllers/waterLink")
const airController = require("./controllers/airLink")
const fireController = require("./controllers/fireLink")


//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Database Connection Error/Success callback functions for var. events
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + "is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

//Route to Home Page
app.get("/", (req, res) => {
    res.render("index.ejs")
})

//controllers-really just more middleware
app.use("/earth", earthController)
app.use("/water", waterController)
app.use("/fire", fireController)
app.use("/air", airController)

//listeners
app.listen(process.env.PORT, () => {
    console.log("All sailors, welcome to port")
})