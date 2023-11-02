import React, {Component} from "react";
import {Col,Row,Container} from "react-bootstrap"

import NavBar from "./NavBar"

class Main extends Component{
    state={}

    render()
    {
        return (
            <>

           <Container>

           <NavBar />
           <Row>
           
           <Col xs={12} md={6}>
            <div>
                <h1>Hi! I'm Hilal Semercioğlu</h1>
            </div>
            </Col>
            <Col xs={12} md={6}>
            </Col>
           
           </Row>
           </Container>

         
           


  
  
            </>
        )
    }
}

export default Main
