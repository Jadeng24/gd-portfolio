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
                        <p> Main area of expertise is front-end development     and everything related. Specializing in HTML, CSS, SASS, PostgreSQL, Express, Massive, Node, Javascript with Angular.js and React.js.
                    </p>
                    <br/>    
                        <p>I have built many full-stack applications using React with many 3rd-party API's, npm packages, and more. Some of these include: Create-react-app in react, Auth0 authentication, Cloudinary, Dropzone, GoogleMaps, react-usa-map,  swapiAPI, National Park Service API, Material-ui, Stripe checkout. 
                    </p>   
                        <br />
                        <p>
                        </p>    
                    </div>
                    <div className='figureHolder'>
                        <div id="cube">
                            <figure class="front"><h3>React</h3></figure>
                            <figure class="back"><h3>HTML5</h3></figure>
                            <figure class="right"><h3>CSS</h3></figure>
                            <figure class="left"><h3>JAVASCRIPT</h3></figure>
                            <figure class="top"><h3>NODE</h3></figure>
                            <figure class="bottom"><h3>GIT</h3></figure>
                        </div>

                    </div> 

                </div>
                <Footer />
            </div>
        )
    }
}
export default Skills;