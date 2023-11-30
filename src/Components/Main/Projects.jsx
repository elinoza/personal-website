import React, { Component } from "react";
import "./Main.css";
import "./Projects.scss";
import { Col,Badge } from "react-bootstrap";


class Main extends Component {
  state = {
    detail_active: false,
  };
  detail_toggler = () => {
    this.setState({ detail_active: !this.state.detail_active });
  };

  find_logo=(logo)=>{
    
 let logos =[["Html5","https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"] ,
 [ "Css","https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" ],
[  "Bootstrap","https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" ],
[  "Javascript","https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" ],
 [ "ReactJS","https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" ],
  ["NodeJS","https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"] ,
[  "Azure","https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" ],
  ["GitHub","https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" ],
[  "ExpressJS","https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" ],
[  "PostgreSQL","https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" ],
 [ "MongoDB","https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" ],
  ["Heroku","https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" ]]
  let Ind=logos.findIndex((elem)=>elem.find((item)=> logo=== item))

return Ind=== -1  ? " " + logo + " " : <img
className="d-inline"
  src={logos[Ind][1]}
  alt="img"
/>  
  }

  render() {



    
    const detail = this.props.detail;
    console.log(detail);
    return (
      <>
        <Col id ="projects-section" className="parent-col" xs={12} md={6}>
        <div className="project">
        <img
        className="project-image"
            src={detail.PosterUrl}
            alt="project_1"
          />
          <div className="overlay"><h1>{detail.projectName}</h1></div>
          <div className="plus" onClick={this.detail_toggler}></div>
          <div
            className={this.state.detail_active ? "detail active" : "detail"}
          >
            <div className="close" onClick={this.detail_toggler}></div>
           

            <div className="infos">
              <img
                className="header"
                src="https://images.unsplash.com/photo-1570451488142-71d08e1511e3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="header-img"
              />
              <div className="header "> {detail.Description}
              <hr/>
              <p >The tools used in the project:</p> {(detail.Tools.map((elem)=>this.find_logo(elem) ) )} </div>
            
                </div>
              <div className="information">
              <div className="links">
                
                <div className="website-image">
                <Badge  bg="warning">Live</Badge>
           
                  <img   src={detail.LogoUrl} />
                </div>
             
                <div className="fe-link">
                <Badge bg="warning">Fe</Badge>
              
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
                </div>
                <div className="be-link">
                <Badge bg="warning">Be</Badge>
                  <img  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
                </div>
              </div>
               

            </div>
          </div>
        </div>
        </Col>
      </>
    );
  }
}

export default Main;
