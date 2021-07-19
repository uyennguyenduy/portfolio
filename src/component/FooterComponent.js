import React from 'react';
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <Jumbotron fluid className="footer-part1">
        <div >
          <h3 className="mb-2">Would you like to work together?</h3>
          <Link to="/contact"><Button>Contact now!</Button></Link>
        </div>  
      </Jumbotron>
      <div className="footer-part2">
         <Row className="justify-content-between">
          <Col md={7} >
            <Link className="router text-light" to="/"><h4>Homepage</h4></Link>
            <ul className="list-unstyled">
              <li><Link className="router text-light" to="/about">About</Link></li>
              <li><Link className="router text-light" to="/contact">Contact</Link></li>
            
            </ul>
          </Col>
          <Col md={5}>
            <h4 className="name">Daisy Nguyenduy</h4>
            <address>
              Da Nang City - Vietnam
              <br/>
              <i className="fa fa-phone"></i> +84 829551055
              <br/>
              <i className="fa fa-envelope"></i>
              <a className="router text-light" href="mailto:ndtudaisy@gmail.com">  ndtudaisy@gmail.com</a>
            </address>
          </Col>  
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <p className="text-center">&copy; Copyright 2020 Daisy Nguyenduy</p>
          </Col>
        </Row>
      </div>
      
    </>
  )
}