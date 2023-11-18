import React, { Component } from "react";
import "./Main.css";
import "./Projects.scss";
import { Col,Badge } from "react-bootstrap";
import Projects from "./Projects";

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
        <Col  xs={12} md={6}>
        <div className="project">
        <img
        className="project-image"
            src={detail[1]}
            alt="project_1"
          />
          <div className="overlay"><h1>{this.props.detail[2]}</h1></div>
          <div className="plus" onClick={this.detail_toggler}></div>
          <div
            className={this.state.detail_active ? "detail active" : "detail"}
          >
            <div className="close" onClick={this.detail_toggler}></div>
            <div className="links">
                
              <div className="website-image">
              <Badge  bg="warning">Live</Badge>
         
                <img src={this.props.detail[0]} />
              </div>
           
              <div className="fe-link">
              <Badge bg="warning">Fe</Badge>
            
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
              </div>
              <div className="be-link">
              <Badge bg="warning">Be</Badge>
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
              </div>
            </div>

            <div className="infos">
              <img
                className="header"
                src="https://images.unsplash.com/photo-1570451488142-71d08e1511e3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="header-img"
              />
              <p className="header "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                aspernatur magnam harum, at laboriosam possimus facilis,
                voluptatibus vitae aliquid </p>
                </div>
              <div className="information">
               

            </div>
          </div>
        </div>
        </Col>
      </>
    );
  }
}

export default Main;
