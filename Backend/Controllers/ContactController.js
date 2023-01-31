const Contact = require("../Models/ContactModel")

const getAllContact = async (req, res) =>{
    try {
        const contact = await Contact.find()
        if(!contact){
            res.status(404).json("Contacts Not Found")
        }
        else{
            res.status(200).json(contact)
        }
    } catch (error) {
        console.log(error)
    }
}


const getContactById = async (req, res) =>{
    const {id} = req.params 
    try {
        const contact = await Contact.findById(id)
        if(!contact){
            res.status(404).json("Contact Not Found")
        }
        else{
            res.status(200).json(contact)
        }
    } catch (error) {
        console.log(error)
    }
}



const addContact = async (req, res) =>{
    const {name, email, phone, image} = req.body 
    try {
        const contact = await Contact.create({name, email, phone, image})
        if(!contact){
            res.status(500).json("Unable to add contact")
        }
        else{
            contact.save()
            res.status(200).json(contact)
        }
    } catch (error) {
        console.log(error)
    }
}



const UpdateContact = async (req, res) =>{
    const {id} = req.params
    const {name, email, phone, image} = req.body 
    try {
        const contact = await Contact.findByIdAndUpdate(id, {name, email, phone, image})
        if(!contact){
            res.status(500).json("Unable to Update Contact")
        }
        else{
            res.status(200).json(contact)
        }
    } catch (error) {
        console.log(error)
    }
}



const deleteContact = async (req, res) =>{
    const {id} = req.params
    try {
        const contact = await Contact.findByIdAndDelete(id)
        if(!contact){
            res.status(500).json("Unable to Delete Contact")
        }
        else{
            res.status(200).json("Contact Deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports  = {
    getAllContact,
    getContactById,
    addContact,
    UpdateContact,
    deleteContact
}