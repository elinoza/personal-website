import React,{ useState, useContext} from "react";


import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import {ThemeContext,Themes} from "../../contexts/theme"
import AnimatedEye from "./AnimatedEye";
import ThemeToggler from "./themeToggler";


function NavBar () {

  const [theme,setTheme] = useContext(ThemeContext)

console.log(theme)
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {" "}

            <div className="sliding-wrapper ">
                    {" "}
                    <div className="pre d-inline">
                      I'm a{" "}
                      <div className="primary-sliding-wrapper">
                        {" "}
                        full-stack{" "}
                        <div className="blank-div">
                          <div className="sliding-parent">
                            <div className="sliding-element"> Frontend</div>
                            <div className="sliding-element"> Backend</div>
                            <div className="sliding-element"> Full-Stack</div>
                          </div>
                        </div>{" "}
                      </div>{" "}
                      Developer
                    </div>{" "}
                  </div>
           
          </Navbar.Brand>
          <ThemeToggler/>
        
          
     
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-section">About</Nav.Link>
              <Nav.Link href="#projects-section">Projects</Nav.Link>
              <Nav.Link className="download_cv" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/117OEe3QYer644yUGYgagZDHooJozFPoT/view?usp=sharing">
                Download CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;
