const express = require("express")
const app = express();
const Port = process.env.Port || 6001;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const Router = require("./Routes/contactRoutes")
const cors = require("cors")

// -------------------Middleware--------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/contact/api/v1", Router)
app.use(cors())


//-----------------------Ste Mongoose Strict Query to false------------------------------------
mongoose.set('strictQuery', false)

//---------------------connect DB and Fire Server----------------------------------------------
mongoose.connect(process.env.Mongo_Uri, {useUnifiedTopology: true, useNewUrlParser: true}).
then(()=>{console.log("Connected to the Database")}).
then(()=>{app.listen(Port, ()=>{console.log(`Server listening on Port ${Port}`)})}).
catch((error)=>{console.log(error)})