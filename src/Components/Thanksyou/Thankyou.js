import React, { Component } from 'react';
import './Thankyou.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class Thankyou extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return (
            <div className='Thankyou'>
                <Nav />
                <div className='mainContentShadow'>
                    <div className='mainContent'>
                        <div className='mainContentTitle'><h1>Your message has been sent.</h1></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Thankyou;