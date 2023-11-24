import React, { Component } from "react";

import "./Main.scss";
import Details from "./Details.json"
import { FaInstagram,FaLinkedin } from "react-icons/fa";



import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from  "./Projects"

import NavBar from "./NavBar";

class Main extends Component {
  state = {
   

  };


  render() {
   
console.log(Details.length)

    return (
      <>
        <Container>
          <NavBar />
          <Row >
            <Col xs={12} md={6}>
              <div className="my-jumbotron">
                <h1>Hi! I'm Hilal  </h1>
                <p>
                  a Full Stack Developer{" "}
                  <Badge bg="warning">Frontend/Backend</Badge> with a passion
                  for building awesome web applications!
                </p>

                <div className="d-flex justify-content-center">
                <FaInstagram />
                <FaLinkedin />
                </div>
              </div>
            </Col>
            <Col className="skills-section my-jumbotron" xs={12} md={6}>
              <h1> SKILLS</h1>
              <img src="./profil.png" />{" "}
              <div id="skill-set">
                {" "}
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />{" "}
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />{" "}
                <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />{" "}
                <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />{" "}
                <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
              </div>
            </Col>
          </Row>
          <h1>My Projects</h1>
          <Row id="projects-row">
{ Details.map((detail,index)=><Projects key={index} detail={detail}  />)}
        
         
         
          </Row>
          <div>Footer</div>
        </Container>
      </>
    );
  }
}

export default Main;