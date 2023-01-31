import React, {useState} from 'react'
import {Card, Button, Modal, Form,  ModalBody} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';



function ContactCard({name, email, phone, image, _id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fname, setfName] = useState(name);
  const [femail, setfEmail] = useState(email);
  const [fphone, setfPhone] = useState(phone);
  const [fimage, setfImage] = useState(image);

  
  const editContact = async() =>{
      await axios.patch(`/contact/api/v1/updateContact/${_id}`, {name: fname, email: femail, phone:fphone, image: fimage})
  }


    const deleteContact = async ()=>{
     if ( window.confirm("Do You want to Delete this Contact")){
      await axios.delete(`/contact/api/v1/deleteContact/${_id}`)
      }

    }
  return (
    <div>
      
    <Card style={{ width: '18rem', width:"400px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <span>Email:<b> {email}  </b>  </span></ListGroup.Item>
        <ListGroup.Item> <span>Phone:<b>{phone}</b> </span></ListGroup.Item>
        <ListGroup.Item>
        
      <Button variant="secondary"  onClick={handleShow} >Edit Contact</Button> {" "}
      <Button variant="danger" onClick={deleteContact}>Delete Contact</Button>
     

      </ListGroup.Item>
      </ListGroup>
    
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Contact</Modal.Title>
        </Modal.Header>
        <ModalBody>
        <Form.Label htmlFor="inputPassword5">Name:</Form.Label>
      <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setfName(e.target.value)}}
        value={fname}/>
      <Form.Label htmlFor="inputPassword5">Email:</Form.Label>
       <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setfEmail(e.target.value)}}
        value={femail}
      />
    <Form.Label htmlFor="inputPassword5">Phone:</Form.Label>
    <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setfPhone(e.target.value)}}
        value={fphone}
      /> 

       <Form.Label htmlFor="inputPassword5">Image:</Form.Label>
    <Form.Control
        type="Text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{setfImage(e.target.value)}}
        value={fimage}
      />  
  
 
    </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact}>
            Edit Contact
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default ContactCard;