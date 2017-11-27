import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import Macbook from '../Assets/macbook.png';
import project1 from '../Assets/workspace.jpg';
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
                        <p>Here are a few of my projects</p>
                         
                          
                    </div>
                    {/*===| Project section |=================================*/}

                    <div className='projectHolder'>
                        <div className='macbookHolder'>
                            {/* <img src={Macbook} alt='macbook' className='macbookFrame' /> */}
                            <img src={project1} alt='project1' className='projectImg' />
                        </div>
                        <div className='projectInfoHolder'>
                            <h3 className='projectTitle'> Project Title</h3>
                            <p className='projectDesc'>Description of project</p>
                        </div>

                    </div>  



                    <div className='projectHolder'>
                        <div className='macbookHolder'>
                            {/* <img src={Macbook} alt='macbook' className='macbookFrame' /> */}
                            <img src={project1} alt='project1' className='projectImg' />
                        </div>
                        <div className='projectInfoHolder'>
                            <h3 className='projectTitle'> Project Title</h3>
                            <p className='projectDesc'>Description of project</p>
                        </div>

                    </div>  
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Projects;