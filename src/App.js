import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';
import Home from './Components/Home/Home.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Router>
          
          <Switch>
             
            {/*===| Nav |=================================*/}
            <Nav />   

            {/*===| Routes |=================================*/}
            <Route component={Home} exact path='/' />
            <Route component={Projects} path='/projects'/>
            <Route component={Contact} path='/contact'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
