import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
class Projects extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='Projects'>
                <Nav/>
            </div>
        )
    }
}
export default Projects;