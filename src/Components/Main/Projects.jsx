import React, { Component } from "react";
import "./Main.css";
import "./Main.scss";
import { Col} from "react-bootstrap";
import Projects from  "./Projects"



class Main extends Component {
  state = {
    detail_active: false,

  };
  detail_toggler=()=> {
    this.setState({detail_active :!this.state.detail_active})
  }

  render() {
const detail =this.props.detail
console.log(detail)
    return (

      <>
      

            <Col className="project" xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project_1"
              />
              <div className="overlay"></div>
              <div
                className="plus"
                onClick={this.detail_toggler}
              ></div>
              <div
                className={
                  this.state.detail_active ? "detail active" : "detail"
                }
              >
                <div className="close" onClick={this.detail_toggler}></div>

                <div className="website"></div>
                <div className="infos">
                  <img
                    className="header"
                    src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="header-img"
                  />
                  <div className="information"></div>
                  <div className="project-Name">The Weather App</div>
                </div>
              </div>
            </Col>
    
      </>
    );
  }
}

export default Main;