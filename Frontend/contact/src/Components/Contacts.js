import React, {useState, useEffect} from 'react'
import axios from "axios"
import ContactCard from "../Components/ContactCard"
import "../Components/contacts.css"
import {Card, Button, Modal, Form, ModalBody} from 'react-bootstrap';



const Contacts = () => {
  const [contacts, setContacts]= useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

 const addContact = async ()=>{

    await axios.post(`/contact/api/v1/addContact`, {name, email, phone, image})
    setName("")
    setEmail("")
    setPhone("")
    setImage("")

 }

  const fetchData = () =>{
    axios
    .get("/contact/api/v1/getAllContacts")
    .then(res => setContacts(res.data))
    .catch(error => console.log(error));
  }
  useEffect(()=>{
   fetchData()
   
  }, [contacts])
  return (
      <div>
        <div className='addBtn' style={{marginLeft: "0px"}} >
        <Button variant="primary" style={{marginTop: "70px"}}  onClick={handleShow} >Add Contact</Button> {" "} </div>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Contact</Modal.Title>
        </Modal.Header>
        <ModalBody>
        <Form.Label htmlFor="inputPassword5">Name:</Form.Label>
      <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setName(e.target.value)}}
        value={name}/>
      <Form.Label htmlFor="inputPassword5">Email:</Form.Label>
       <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
      />
    <Form.Label htmlFor="inputPassword5">Phone:</Form.Label>
    <Form.Control
        type="Number"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setPhone(e.target.value)}}
        value={phone}
      /> 

       <Form.Label htmlFor="inputPassword5">Image:</Form.Label>
    <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setImage(e.target.value)}}
        value={image}
      />  
  
 
    </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


     

    
    <div  className='contacts'  style={{ justifyContent:"center", display: "grid",padding:"20px", gridTemplateColumns:"auto auto auto", gap:"100px", marginTop:"60px", marginLeft:"auto", marginRight:"auto"}}>
      {contacts.map((contact)=>{
        return (
        <div key={contact._id}> 
        <ContactCard {...contact} />
        </div>



      )
      })}

      
</div>
</div>
  )
}

export default Contacts