import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Input, Label, FormFeedback, Button } from 'reactstrap';
import { Banner } from './Banner';

export class Contact extends Component {
  constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			telnum: '',
			email: '',
			agred: false,
			contactType: '',
			message: '',
			touched: {
				email: false,
			}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleBlur = (field) => (evt) => {
		this.setState({
			touched: {...this.state.touched,[field]:true}
		});
	}
	validate(email) {
		const errors = {
			email: ''
		};
		if (this.state.touched.email && errors.email.split('').filter(x => x === '@').length !== 1)
		errors.email = "Email should contain a @";
		return errors;
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('your feedback is ' + JSON.stringify(this.state));
		
	}
	handleInputChange({target}) {
		const nam = target.name;
		const val = target.type === "checkbox" ? target.checked : target.value;

		this.setState({[nam]:val});
	}

  render() {
    const errors = this.validate(this.state.email);
    return (
      <>
      <header className="bg-secondary">
        <Banner src="./assets/xibg6.jpg" title="CONTACT"/>
      </header>
      
      <section className="container section-contact">
        <h2>Xin chao!</h2>
        <div className="p-4">
          <p>
        I am very glad to know you and would like to have opportunity that I can contribute my ability for your company. <br/>
        With nearly two years of Project Secretary at a hospitality consulting company and more roles in service industry, I am good at structured thinking, planning timeline for clients projects and eager to find solutions for quality assurance. Besides, I also have strongly teamwork and organization skills with clear, detail briefs to work closely other departments in order to meet goals. Detail of experiences could be viewed in the resume.<br/>
        I start being curious about Web Development and Data fields while I worked in previous job. Therefore, I am self-studying about it through online courses (W3C school, Code academy, Coursera) and I hope to learn more practical knowledge. With manner of honesty, responsibility, hard-working and fast-learning, I believe that I am appropriate to your culture and we could sustainably develop together. I hope to be a part of your family for cozy and long-term relationship.<br/>
        Thank you for your time and consideration. I look forward to meet you to know more detail about your company and discuss how we can work best together. <br/>
          </p>
        </div>
      </section>

      <section className="container mt-3">
        <h1>Nice to receive your <span style={{color:"var(--main)"}}>message !</span></h1>
        <Row className="mt-4">
          <Col md={8}>
            <Form onSubmit={this.handleSubmit}>
            <Row className="mb-4">
              <Col md={6}>
                <FormGroup row>
                  <Label for="firstname" md={4}>First name</Label>
                  <Col md={8}>
                    <Input type="text" id="firstname" name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleInputChange}
                      placeholder="Uyen" />
                  </Col>	
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup row>
                  <Label for="lastname" md={4}>Last name</Label>
                  <Col md={8}>
                    <Input type="text" id="lastname" name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleInputChange}
                      placeholder="Nguyen" />
                  </Col>	
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                <FormGroup row>
                  <Label for="telnum" md={4}>Tel. num</Label>
                  <Col md={8}>
                    <Input type="text" id="telnum" name="telnum"
                      value={this.state.telnum}
                      onChange={this.handleInputChange}
                      placeholder="Contact tel number" />
                  </Col>	
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup row>
                  <Label for="email" md={4}>Email</Label>
                  <Col md={8}>
                    <Input type="text" id="email" name="email"
                      value={this.state.email}
                      valid={errors.email === ''}
                      invalid={errors.email !== ''}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleInputChange}
                      placeholder="email" required/>
                      <FormFeedback>{errors.email}</FormFeedback>
                  </Col>	
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                <FormGroup>
                  <Label check>
                    <Input type="checkbox" name="agree"
                    value={this.state.agree}
                    onChange={this.handleInputChange}
                    /> {' '}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="select" name="contactType"
                  value={this.state.contactType}
                  onChange={this.handleInputChange}>
                    <option>Email</option>
                    <option>Telnum</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup row className="mb-4">
              <Label for='message' md="2">Your message</Label>
              <Col md={10}>
                <Input type="textarea" id="message" name="message" rows="7"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  placeholder="Happy to know you and read anything you write"	/>
              </Col>
            </FormGroup>
            <Button className="w-50 d-block mx-auto" type="submit">Submit</Button>
          </Form>
          </Col>
          <Col md={4} className="pt-4">
            <div>
              <img className="d-block mx-auto" src="./assets/ximuoi.png" alt="xi muoi" width="90%"/>
            </div>
          </Col>
        </Row>
      </section>
      </>
    )
  }
}