import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


function Nav2() {
    return (
<>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Hedge-Fund</Navbar.Brand>
    <Nav className="mr-auto">
       <Nav.Link href="#home">Jobs</Nav.Link>
      <Nav.Link href="#features">Create a Job</Nav.Link> 
       <Nav.Link href="#pricing">Pricing</Nav.Link> 
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

 
</>
 );
}

export default Nav2;
