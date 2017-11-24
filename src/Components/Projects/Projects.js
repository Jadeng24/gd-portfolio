import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class Projects extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='ProjectsHolder'>
                <Nav />
                <div className='Projects mainContent'>
                    <div className='mainContentTitle'><h1>Projects and Work</h1></div>
                    <div className='mainContentP'>
                        <p>content placed here . . . . . . . . . . . .</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Projects;