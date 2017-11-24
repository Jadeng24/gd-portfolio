import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class Contact extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='ContactHolder '>
                <Nav />
                <div className='Contact mainContent'>
                    <div className='mainContentTitle'><h1>Contact Me</h1></div>
                    <div className='mainContentP'>
                        <p>content placed here . . . . . . . . . . . .</p>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;