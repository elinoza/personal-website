import React, { useContext, useState } from "react";
import "./Main.scss";
import AnimatedEye from "../Animations/AnimatedEye";
import Details from "../../Utils/Details.json";
import Logos from "../../Utils/Logos.json";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from "../Projects/Projects";
import NavBar from "../Navbar/NavBar";
import { ThemeContext, Themes } from "../../contexts/theme";

function Main() {
  const [theme, setTheme] = useContext(ThemeContext);

  console.log(Details.length, Logos);

  return (
    <div   className={`${
      theme === Themes.dark ? "dark-wrapper" : "light-wrapper"
    }`}>
      <Container 
      
      >
        <NavBar />
        <Row id="about-section" className="first-row  ">
          <Col xs={12}>
            <Row className="my-jumbotron" >
              <Col xs={12} md={8} >
                {" "}
                <div >
                  <div className="mb-4 ">
                    {" "}
                    <h1 className="d-inline ">Hi! I'm Hilal </h1>{" "}<AnimatedEye/>
                  </div>
                  <div className="jumbotron-body mb-5">
                    <div className="sliding-wrapper ">
                      {" "}
                      <div className="pre d-inline">
                        "I'm a{" "}
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
                        Developer.
                      </div>{" "}
                     <p className="d-inline">  I'm passionate for building awesome web applications! </p><p> I'm
                      an industrial/System Engineer.I successfully completed a
                       Full Stack (MERN) Developer Bootcamp Program in
                      Epicode (formerly known as Strive School GmBh)."</p>
                    </div>
              
                  </div>
                </div>
              </Col>
              <Col  className="d-flex justify-content-center " xs={12} md={4}>
                <div className=" contacts ">
                <a
                    className="icon"
                    href="https://github.com/elinoza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />{" "}
                  </a>
                  <a
                    className="icon"
                    href="mailto:hillcakmak@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <SiGmail />
                  </a>
                  <a
                    className="icon"
                    href="https://www.linkedin.com/in/hilalsemercioglu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="icon"
                    href="https://medium.com/@hilalsem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMedium />{" "}
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="skills-section my-jumbotron mt-5 ">
            <h1> SKILLS</h1>

            <div id="skill-set">
              {Logos.map((elem) => (
                <div className="skill-icon">
                  <img className="icon-img" src={elem} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
       
        <Row className="mb-5" id="projects-row">
        <h1>My Projects</h1>
          {Details.map((detail, index) => (
            <Projects key={index} detail={detail} />
          ))}
        </Row>
      
      </Container>
    </div>
  );
}

export default Main;
