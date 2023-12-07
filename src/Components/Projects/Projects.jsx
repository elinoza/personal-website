import React, { Component } from "react";
import "../Main/Main.css";
import "./Projects.scss";
import {find_logo} from "./Logos"
import { Col,Badge } from "react-bootstrap";


class Main extends Component {
  state = {
    detail_active: false,
  };
  detail_toggler = () => {
    this.setState({ detail_active: !this.state.detail_active });
  };

  

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
              <p >The tools used in the project:</p> {(detail.Tools.map((elem)=>find_logo(elem) ) )} </div>
            
                </div>
              <div className="information">
              <div className="links">
                
                <div className="website-image" onClick={()=> window.open(detail.WebUrl)}>
              
                
                   
                
                <Badge  bg="warning">Web</Badge>
                
           
                  <img   src={detail.LogoUrl} />
               
                </div>
             
                <div className="fe-link" onClick={()=> window.open(detail.Fe)}>
                <Badge bg="warning">Fe</Badge>
              
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
                </div>
                <div className="be-link" onClick={()=> window.open(detail.Be)}>
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
