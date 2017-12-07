import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Skills from './Components/Skills/Skills.js';
import Contact from './Components/Contact/Contact.js';
import Loading from './Components/Loading/Loading.js';
import Thankyou from './Components/Thanksyou/Thankyou.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div>
          
        <Router>
          
          <Switch>
             
            {/*===| Nav |=================================*/}
              

            {/*===| Routes |=================================*/}
              <Route component={Home} exact path='/' />
              <Route component={About} path='/about' />  
            <Route component={Projects} path='/projects'/>
            <Route component={Skills} path='/skills'/>
            <Route component={Contact} path='/contact'/>
            <Route component={Loading} path='/loading'/>
            <Route component={Thankyou} path='/messagesent'/>
          </Switch>
          </Router>
        </div>  
      </div>
    );
  }
}

export default App;
