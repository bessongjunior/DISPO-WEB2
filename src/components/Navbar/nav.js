import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,
     Container, 
     Nav, 
     Button,
    //  Form, 
    //  FormControl, 
    // NavDropdown 
    } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarGeneral = () => {
    return ( 
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" ms-5 mx-5" style={{float: "right"}}>  {/*ms-5*/}
                            <Nav.Link href=""><Link to='/'/>Home</Nav.Link>
                            <Nav.Link href=""><Link to='services'/>Services</Nav.Link>
                            <Nav.Link href=""><Link to='about-us'/>About Us</Nav.Link>
                            <Nav.Link href=""><Link to='contact-us'/>Contact Us</Nav.Link>
                        </Nav>
                        <Nav className='mx-4'><Button className="lg rounded-pill" variant="primary">Partner with us</Button></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default NavbarGeneral;
