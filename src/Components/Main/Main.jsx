import React, { Component } from "react";
import "./Main.css";
import "./Main.scss";
import Details from "./Details.json"


import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from  "./Projects"

import NavBar from "./NavBar";

class Main extends Component {
  state = {
   

  };


  render() {
    let LinkedinLearningPoster="https://i.insider.com/61e861e69386c900185f5fb3?width=700"
    let linkedinLearningLogo="https://upload.wikimedia.org/wikipedia/commons/5/52/LinkedIn_Learning_logo.png";
    let linkedinLogo="https://content.linkedin.com/content/dam/brand/site/img/logo/logo-r.png";
    let linkedinPoster= "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let weatherAppLogo="https://i.pinimg.com/564x/75/b3/3e/75b33e0bfbc8b13cd646dca30511f30a.jpg";
    let weatherAppPoster="https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let quizLogo="https://img.freepik.com/free-vector/comic-style-question-mark-speech-bubble-background_1017-23978.jpg?w=826&t=st=1700332942~exp=1700333542~hmac=af665bb2cd39b784aaaf37bba6a7189c9b73fc13d5f425f5c069cca18e426423";
    let quizPoster="https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
console.log(Details.length)

    //let detail_list=[[linkedinLearningLogo,LinkedinLearningPoster,"Linkedin Learning Clone"],[weatherAppLogo,weatherAppPoster,"The Weather App"],[quizLogo,quizPoster,"Quiz Game"],[linkedinLogo,linkedinPoster,"Linkedin Clone"]]

    return (
      <>
        <Container>
          <NavBar />
          <Row >
            <Col xs={12} md={6}>
              <div className="my-jumbotron">
                <h1>Hi! I'm Hilal Semercioğlu </h1>
                <p>
                  a Full Stack Developer{" "}
                  <Badge bg="warning">Frontend/Backend</Badge> with a passion
                  for building awesome web applications!
                </p>

                <div className="d-flex justify-content-center">
                  <Button className="mr-2">Contact Me</Button>
                  <Button>My Portfolio</Button>
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