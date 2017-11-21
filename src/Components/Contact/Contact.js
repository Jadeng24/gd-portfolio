import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav/Nav.js';
class Contact extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='Contact'>
            <Nav/>    
                hello there
                how 
                are you 
                doing today?are
            </div>
        )
    }
}
export default Contact;