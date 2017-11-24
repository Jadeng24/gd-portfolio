import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class Skills extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='SkillsHolder'>
                <Nav />

                {/*===| MainContent |============================*/}
                <div className='Skills mainContent'>
                    <div className='mainContentTitle'><h1>Skills and Experience</h1></div>
                    <div className='mainContentP'>
                        <p> Main area of expertise is front-end development     and everything related. Specializing in HTML,       CSS, SASS, Javascript with Angular.js and           React.js.
                    </p>
                        <p>I have built many full-stack applications using React with many 3rd-party API's, npm packages, and more. Some of these include: Cloudinary, Dropzone, GoogleMaps, react-usa-map,
                    </p>

                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
export default Skills;