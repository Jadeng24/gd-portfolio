import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
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
                <div className='mainContentShadow'>
                    <div className='About mainContent'>
                        <div className='mainContentTitle'><h1>About Me</h1></div>
                        <div className='mainContentP'>
                            <p>I am a full-stack software engineer with a passion to always find a better methods of coding. I enjoy solving problems and bringing new ideas to the table. I stand out with my dedication to creating beautifully pleasing and natural interfaces. I want to bring my apps / websites to life. Im very detail-oriented and strive for the best mobile, tablet, and desktop applications / websites. <Link to='/contact'>Send me a message</Link></p>
                                <br/><br/>
                                <h3>A few of my accomplishments include:</h3>
                                <ul>
                                    <li>Created a <span>full-stack</span> mobile-responsive ecommerce site w/products, cart, checkout - Adventure App</li>
                                <li>Assembled websites from wireframes to finish using <span>HTML, CSS languages javascript, react, redux, sql, bootstrap, node, sql auth0, and postgres and various 3rd party API's.</span> </li>
                                <li>Generated dozens of logos and graphic designs using <span>Adobe Photoshop, InDesign, and Illustrator</span></li>
                                <li>Attained <span>salesman</span> skills by selling <span>550</span> pest control accounts door-to-door over a two-summer period.</li>
                                </ul>                                
                        </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                )
    }
}
export default About;