import React from 'react';
import { Row, Col } from 'reactstrap';

export const Banner = (props) => {
  return (
    <div>
      <Row className="p-3">
        <Col md={6}>
          <div className="banner-object1"></div>
          <div className="banner-object2">
            <img  src={props.src} alt="logo" width="100%"/>
          </div>  
        </Col> 
        <Col md={6}>
          <div className="banner-object3">
            <h1 className="display-1">{props.title}</h1>
          </div>
          <div></div>
        </Col>    
      </Row>
    </div>
  )
}