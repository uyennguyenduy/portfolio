import React, { Component } from 'react';
import './App.css';
import { Main } from './component/MainComponent';
import { ScrollToTop} from './component/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <Main />
      </BrowserRouter>
      
    )
  }
}

export default App;
