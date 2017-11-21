import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav/Nav.js';

class Skills extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='Skills'>
                <Nav/>
            </div>
        )
    }
}
export default Skills;