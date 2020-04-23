import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            joke: {}
        }

        this.getJoke = this.getJoke.bind(this);
    }

    getJoke() {
        axios.get('api/get_joke').then(newJoke => {
            this.setState({
                joke: newJoke.data
            });
        });
    }

    render() {
        return (
            <div className='SkillsHolder'>
                <Nav />

                {/*===| MainContent |============================*/}
                <div className='mainContentShadow'>
                    <div className='Skills mainContent slideInLeft'>
                        <div className='mainContentTitle'><h1>Skills and Experience</h1></div>
                        <div className='mainContentBubbles'>
                            <span>Angular9+</span>
                            <span>AngularJs</span>
                            <span>NgRx</span>
                            <span>ReactJs</span>
                            <span>Redux</span>
                            <span>Ionic 4+</span>
                            <span>Cordova</span>
                            <span>Git</span>
                            <span>Node.js</span>
                            <span>Python</span>
                            <span>REST APIs</span>
                            <span>PostgreSQL</span>
                            <span>HTML5</span>
                            <span>SCSS</span>
                            <span>Hosting</span>
                            <span>Architecture</span>
                            <span>Database</span>
                            <span>Dev Mentoring</span>
                        </div>

                        <div className='mainContentP'>
                            <p>With over 3 years of experience in full-stack software engineering and web & app development, I am confident I will be a great asset to you and your company. My previous work experience has set me apart with unique leadership skills and a wide variety of technical languages necessary to bring great value to the dev team, and company as a whole.</p>
                            <br />

                            <p>While I worked at Blip Billboards, I developed 2 major out-of-home advertising applications, one giving thousands of digital-billboard sign owners the ability to upload and manage their billboards, and the other a full-fledged advertising campaign tool servicing over hundreds of thousands of advertisers all over North America. To help future-proof web applications, I facilitated the conversion of an old AngularJs application to a new Angular9+ framework. People say I have an eye for design and am a wizard at front-end development.</p>
                            <br />

                            <p>
                            </p>
                        </div>
                        <div className='figureHolder'>
                            <div id="cube">
                                <figure className="front"><h3>React</h3></figure>
                                <figure className="back"><h3>HTML5</h3></figure>
                                <figure className="right"><h3>CSS</h3></figure>
                                <figure className="left"><h3>JAVASCRIPT</h3></figure>
                                <figure clasNames="top"><h3>NODE</h3></figure>
                                <figure className="bottom"><h3>GIT</h3></figure>
                            </div>

                        </div>

                        <div className="jokesHolder">
                            <div className='callToActionBtn' onClick={this.getJoke}>{this.state.joke.value ? 'Tell me another joke' : 'Tell me a Chuck Norris Joke'}</div>
                            <h3 className="jokeText">{this.state.joke.value}</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Skills;