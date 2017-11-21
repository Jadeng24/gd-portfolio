import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav/Nav.js';
class About extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='About'>
                <Nav/>
            </div>
        )
    }
}
export default About;