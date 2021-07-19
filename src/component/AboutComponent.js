
import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Banner } from './Banner';

function RenderExperience({company}) {
  return (
    <div className="container">
      <Row>
        <Col md={4}>
          <h3 className="p-4">{company.time}</h3>
        </Col>
        <Col md={8}>
          <div style={{borderLeft: "15px solid grey"}} className="p-4">
            <h3>{company.name}</h3>
            <i>{company.title}</i>
          </div>
          <ul>
            {company.description.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export class About extends Component {
  render() {
    const experience = this.props.companies.map((com) => {
      return (
        <div key={com.id}>
          <RenderExperience  company={com}/>
        </div>
      )
    })
    return (
      <>
      <header className="bg-secondary">
        <Banner src="./assets/xibg4.png" title="ABOUT"/>
      </header>
      
      <section className="container section-info">
        <Row>
          <Col md={6} className="text-light">
            <h1 className="display-4">Hello, My name is</h1>
            <h2 style={{backgroundColor:"var(--ndmain)"}}>Nguyen Duy Thao Uyen</h2>
            <p>Be honest, be responsible, be curious</p>
            <a href="https://www.facebook.com/daisynguyenduy/" target="_blank" rel="noreferrer">
              <i className="icon-social fa fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/uyen-nguyenduy-07281b171/" target="_blank" rel="noreferrer">  
            <i className="icon-social fa fa-linkedin fa-lg"></i>
            </a>
            <a href="mailto:ndtudaisy@gmail.com">  
              <i className="icon-social fa fa-envelope fa-lg"></i>
            </a>
          </Col>
          <Col md={3} className="p-4 text-center" >
            <div className="p-2" style={{backgroundColor:"var(--neutral"}}>
              <div className="mb-3">
                <img  src="./assets/hobbies.jpg" alt="logo" width="100%"/>
              </div>
              <p>Garderning</p>
              <p className="bg-secondary text-light">Meditation</p>
              <p>Cooking</p>
            </div>
          </Col>
          <Col md={3} className="p-2 text-center" style={{backgroundColor:"var(--neutral"}}>
            <div className="mb-3">
              <img  src="./assets/profile2.png" alt="logo" width="100%"/>
            </div>
            <div>
              <span className="fa fa-birthday-cake"></span> 29/04/1994
            </div>
            <div className="bg-secondary m-2 text-light">
              <span className="fa fa-phone"></span> +84 829 55 10 55
            </div>
            <div>
              <i className="fa fa-envelope"></i> <a href="mailto:abc@gmail.com">ndtudaisy@gmail.com</a>
            </div>
          </Col>
        </Row>
      </section>

      <section className="section-experience">
        <h2><span>I</span> spend <span>memorable</span> time at...</h2>
        <hr/>
        {experience} 
      </section>

      <section className="container section-education">
        <Row>
          <Col md={4} className="p-3 text-center" style={{backgroundColor:"var(--ndmain)"}}>
            <div className="border border-dark bg-light p-2 mb-3">
              <img  src="./assets/due.jpg" alt="logo" width="100%"/>
            </div>
            <p style={{fontSize: "1.5em"}}>2013 - 2017</p>
            <strong>Danang University of Economics </strong>
            <p>Hospitality Business Administration</p>
          </Col>
          <Col md={3} className="pt-3 text-center" >
            <div style={{backgroundColor:"var(--ndmain"}} className="p-3">
              <div className="border p-2">
                <img  src="./assets/cfl.jpg" alt="logo" width="100%"/>
              </div>
              <p style={{fontSize: "1.5em"}}>2012 - 2016</p>
              <strong>Danang University of Foreign Languages </strong>
              <p>English Language</p>
            </div>
          </Col>
          
          <Col md={5} className="text-center">
            <h2><span>School</span> days return back with...</h2>
            <hr/>
            <blockquote style={{fontStyle: "italic"}}>
              “Education is a key to change you life, open the door of bright future and get thriving in material . Moreover, self-education is a passport to freedom and happiness in your mind”
            </blockquote>
            <a href="https://drive.google.com/file/d/1NoDxkArbDxwFObd-OT_J-IrQP6Neh6Mk/view?usp=sharing" target="_blank" rel="noreferrer">
              <Button className="mx-auto d-block">Download CV</Button>
            </a>
          </Col>
        </Row>
      </section>
      </>
    )
  }
}