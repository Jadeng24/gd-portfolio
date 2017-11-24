import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class About extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='AboutHolder'>
                <Nav />
                <div className='About mainContent'>
                    <div className='mainContentTitle'><h1>About Me</h1></div>
                    <div className='mainContentP'>
                        <p>content placed here . . . . . . . . . . . .</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default About;