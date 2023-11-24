import React, {Component} from "react";
import "./Main.css"
import { Navbar,Nav,NavDropdown,Container,Button} from "react-bootstrap"


class NavBar extends Component
{
    state={}
    render()
    {
        return(
            
           <Navbar expand="lg" className="bg-body-tertiary">
           <Container>
             <Navbar.Brand href="#home"> Hilal  Semercioğlu. </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#home">About</Nav.Link>
                 <Nav.Link href="#link">Projects</Nav.Link>
                 <Nav.Link className="download_cv" href="#link">Download CV</Nav.Link>
            
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
     

        )

    }

}
 export default NavBar;