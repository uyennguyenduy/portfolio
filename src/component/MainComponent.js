import React, { Component } from 'react';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomeComponent';
import { About } from './AboutComponent';
import { Contact } from './ContactComponent';
import { JOBS } from '../share/jobs';
import { PORTFOLIOS } from '../share/portfolios';
import { COMPANIES } from '../share/companies';
import { Redirect, Route, Switch } from 'react-router-dom';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: JOBS,
      portfolios: PORTFOLIOS,
      companies: COMPANIES
    }
  }
  render() {
    const home = () => {
      return (
        <Home jobs={this.state.jobs}
          portfolios={this.state.portfolios} />
      )
    }
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path='/about' component={() => <About companies={this.state.companies}/>}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={home}/>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    )
  }
}