import React,{ useState, useContext} from "react";


import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import {ThemeContext,Themes} from "../../contexts/theme"
import AnimatedEye from "../Animations/AnimatedEye";
import ThemeToggler from "../themeToggler";


function NavBar () {

  const [theme,setTheme] = useContext(ThemeContext)

console.log(theme)
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
         
          <Navbar.Brand className="d-flex" href="#home">
      
            
          <ThemeToggler/>

           
           
          </Navbar.Brand>
      
        
        
          
     
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-section">About</Nav.Link>
              <Nav.Link href="#projects-section">Projects</Nav.Link>
              <Nav.Link className="download_cv" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/106w_dsuhKX6JiCyJ2Po0FwkdMPgf6k_L/view?usp=sharing">
              CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;
