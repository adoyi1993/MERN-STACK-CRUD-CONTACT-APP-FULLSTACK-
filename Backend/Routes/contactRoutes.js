const express = require("express")
const router = express.Router()
const { getAllContact,
    getContactById,
    addContact,
    UpdateContact,
    deleteContact} = require("../Controllers/ContactController")


router.get("/getAllContacts", getAllContact)
router.get("/getContact/:id", getContactById)
router.post("/addContact", addContact)
router.patch("/updateContact/:id", UpdateContact)
router.delete("/deleteContact/:id", deleteContact)




module.exports = router 
