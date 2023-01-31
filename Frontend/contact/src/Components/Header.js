import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Components/header.css"


function Header() {
    return (
        <>
        <Navbar bg="dark" variant="dark" fixed='top'>
          <Container>
            <Navbar.Brand href="#home">ContactApp</Navbar.Brand>
            <div className="navitems">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>

            </div>
            
          </Container>
        </Navbar>
       
      </>
    );
  }
  
  export default Header;