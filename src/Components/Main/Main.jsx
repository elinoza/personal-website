import React, { Component } from "react";
import "./Main.scss";
import Details from "./Details.json";
import Logos from "./Logos.json"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { Col, Row, Container, Button, Badge } from "react-bootstrap";
import Projects from "./Projects";

import NavBar from "./NavBar";

class Main extends Component {
  state = {};

  render() {
    console.log(Details.length,Logos);
 let logos= [
  "https://www.svgrepo.com/show/508837/html5-01.svg",
  "https://www.svgrepo.com/show/508794/css3-01.svg",
  "https://w7.pngwing.com/pngs/628/224/png-transparent-bootstrap-plain-wordmark-logo-icon-thumbnail.png",
  "https://www.svgrepo.com/show/353925/javascript.svg",
  "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png",
  "https://www.svgrepo.com/show/354118/nodejs.svg",
  "https://www.svgrepo.com/show/448274/azure.svg",
  "https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo-500x289.jpg",
  "https://www.svgrepo.com/show/353724/express.svg",
  "https://www.unixmen.com/wp-content/uploads/2017/07/postgresql-logo.png",
  "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
  "https://www.svgrepo.com/show/303683/heroku-logo.svg",
  "https://cdn-images-1.medium.com/max/480/1*2YG993b8WrHwvmAe7WckAA.png",
  "https://www.svgrepo.com/show/374061/sass.svg",
]
    return (
      <>
        <Container>
          <NavBar />
          <Row id="about-section" className="first-row">
            <Col xs={12} md={6}>
              <div className="my-jumbotron">
                <h1>Hi! I'm Hilal </h1>
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
                {logos.map((elem) => (
                  <div className="skill-icon">
                    <img src={elem} />
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
}

export default Main;
