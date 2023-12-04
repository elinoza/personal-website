import React, { useContext,useState } from "react";
import "./Main.scss";
import AnimatedEye from "./AnimatedEye";
import Details from "./Details.json";
import Logos from "./Logos.json"
import {FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from "./Projects";
import NavBar from "./NavBar";
import {ThemeContext,Themes} from "../../contexts/theme"

 function Main() {
  const [theme,setTheme] = useContext(ThemeContext)


    console.log(Details.length,Logos);

    return (
      <>
        <Container className={`${theme === Themes.dark ? "dark-wrapper" : "light-wrapper"}`}>
          <NavBar />
          <Row id="about-section" className="first-row">
            <Col xs={12} md={6}>
              <div className="my-jumbotron">
           < div style={{position:"relative"}}> <h1>Hi! I'm Hilal </h1> </div>   
                <div className="jumbotron-body">
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
                  <p className="d-inline">
                    I'm passionate for building awesome web applications! I'm an
                    industrial/System Engineer.I successfully completed a
                    6-months Full Stack (MERN) Developer Bootcamp Program in
                    Epicode (formerly known as Strive School GmBh).
                  </p>
                </div>

                <div className="d-flex justify-content-end">
                  <a  className="icon"href="mailto:hillcakmak@gmail.com" rel="noopener noreferrer"><SiGmail  /></a>
                  <a  className="icon" href="https://www.linkedin.com/in/hilalsemercioglu/"  target="_blank" rel="noopener noreferrer"><FaLinkedin  /></a>
                  <a className="icon" href="https://medium.com/@hilalsem"  target="_blank" rel="noopener noreferrer">
                    <FaMedium  />{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col className="skills-section my-jumbotron" xs={12} md={6}>
              <h1> SKILLS</h1>

              <div id="skill-set">
                {Logos.map((elem) => (
                  <div className="skill-icon">
                    <img className= "icon-img" src={elem} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <h1>My Projects</h1>
          <Row id="projects-row">
            {Details.map((detail, index) => (
              <Projects key={index} detail={detail} />
            ))}
          </Row>
          <div>Footer</div>
        </Container>
      </>
    );
  
}

export default Main;
