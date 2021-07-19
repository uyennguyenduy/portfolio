import React, { Component } from 'react';
import { Button, Row, Col, Card, CardBody, CardTitle, CardText, Progress} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderJob({item}) {
  return (
    <Card className="border-0" style={{backgroundColor: "transparent"}}>
      <CardBody className="text-center">
        <img src={item.image} width="50%" alt={item.name} className="d-block mx-auto"/>
        <CardTitle tag="h3" className="text-light">{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

export class Home extends Component {
  render() {
    const job = this.props.jobs.map((job) => {
      return (
        <Col md={4}key={job.id}>
          <RenderJob item={job}/>
        </Col>
      )
    });
    const porfolio = this.props.portfolios.map((portfolio) => (
      <Col md={4} key={portfolio.id}>
        <div>
          <a href={portfolio.link} target="_blank" rel="noreferrer">
            <img src={portfolio.image} alt={portfolio.name} width="100%"/>
          </a>
          <h6 className="bg-secondary text-light">{portfolio.name}</h6>
        </div>
      </Col>
    ))
    return (
      <>
      <header className="mt-3">
        <img src="./assets/xibg1.png" alt='xi muoi background' width="100%" />
        <div className="mt-3 text-center">
          <img src="./assets/name1.png" alt="daisy nguyenduy" width="100%" className="d-block mx-auto"/>
          <blockquote style={{fontSize:"1.25em", fontStyle:"italic"}} className="m-3">
            <i className="fa fa-quote-left text-secondary"/>{' '}
              I do not seek a job – I do find and wait a “second home” which its environment is great with nice people that I could devote time and all competencies to develop together, create values and enjoy life with inner peace {' '}
            <i className="fa fa-quote-right text-secondary"/>
          </blockquote>
          <Link to="/about" className="router">
            <Button className='d-block mx-auto w-50'>Discover about me!</Button>
          </Link>
          
        </div>
      </header>

      <section className="container section-jobs">
        <h2 className="text-center text-light display-4 pt-3">Who I can be?</h2>
        <Row className="mt-3">
          {job}
        </Row>
      </section>

      <section className="section-skills">
        <Row className="justify-content-centeralign-items-center">
          <Col>
            <h2 className="display-2">
              What <span style={{backgroundColor:"var(--main)", color:"white"}}>skills</span> <br/>
              
              I have
            </h2>
          </Col>
          <Col md={6}>
            <blockquote style={{fontSize:"1.25em", fontStyle:"italic"}}>
              "Learn everything you can, anytime you can, from anyone you can - there will always come a time when you will be gratefull you did"
            </blockquote>
          </Col>
        </Row>
      </section>

      <section className="container-fluid" >
        <Row className="mt-4">
          <Col lg={6} style={{backgroundColor: "var(--neutral)"}} className="p-4">
            <h2 className="mt-3">Interpersonal & Technical</h2>
            <blockquote className="text-secondary">"The best way to sharpen skills is to use it everyday"</blockquote>
            <Row className="mt-4">
              <Col md={5}>Structured thinking</Col>
              <Col md={7}>
                <Progress value="80" color="secondary"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={5}>Presentation</Col>
              <Col md={7}>
                <Progress value="60" color="secondary"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={5}>Teamwork</Col>
              <Col md={7}>
                <Progress value="80" color="secondary"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={5}>English</Col>
              <Col md={7}>
                <Progress value="70" color="secondary"/>
              </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
              <Col md={6} className="text-center">
                <Link to="/about"><Button>See more!</Button></Link>
                
              </Col>
            </Row>
          </Col>
          <Col lg={6} style={{backgroundColor: "var(--ndmain)"}}>
            <div className="m-4 p-2 bg-light" style={{border:"5px ridge white"}}>
              <img  src="./assets/xibg2.png" alt="logo" width="100%"/>
            </div>  
          </Col> 
        </Row> 
      </section>

      <section className="container mt-4 section-works">
        <h2 className="text-center display-4">
          What <span style={{backgroundColor:"var(--main)", color:"white"}}>works</span>I did?
        </h2>
        <Row className="mt-4">
          {porfolio}
        </Row>
      </section>
      </>
    )
  }
}