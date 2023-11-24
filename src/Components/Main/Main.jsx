import React, { Component } from "react";

import "./Main.scss";
import Details from "./Details.json";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from "./Projects";

import NavBar from "./NavBar";

class Main extends Component {
  state = {};

  render() {
    console.log(Details.length);
    let logos =["https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" ,
     "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" ,
     "https://w7.pngwing.com/pngs/628/224/png-transparent-bootstrap-plain-wordmark-logo-icon-thumbnail.png" ,
     "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" ,
     "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png" ,
     "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" ,
     "https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" ,
     "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" ,
     "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" ,
     "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" ,
     "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" ,
     "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" ,
    "https://www.svgrepo.com/show/452093/redux.svg"]
    return (
      <>
        <Container>
    
          <NavBar />
          <Row className="first-row">
            <Col xs={12} md={6}>
              <div className="my-jumbotron">
                <h1>Hi! I'm Hilal   </h1>
<div className="jumbotron-body"><div className="sliding-wrapper ">
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
                <p className="d-inline">I'm passionate for building awesome web applications! I'm an industrial/System Engineer.I successfully completed a 6-months Full Stack (MERN) Developer Bootcamp Program in Epicode (formerly known as Strive School GmBh).
 </p></div>
                

                <div className="d-flex justify-content-end">
                  <SiGmail className="icon" />
                  <FaLinkedin className="icon" />
                  <FaMedium className="icon" />
                </div>
              </div>
            </Col>
            <Col className="skills-section my-jumbotron" xs={12} md={6}>
             
              <h1> SKILLS</h1>
              <img src="./profil.png" />{" "}
              <div id="skill-set">
            {logos.map((elem)=> <div className="skill-icon"><img src={elem}/></div>)}
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
}

export default Main;
