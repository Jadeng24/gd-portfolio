import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import Macbook from '../Assets/macbook.png';
import WipApp from '../Assets/WipLanding.png';
import AdventureApp from '../Assets/landing.png';
import swal from 'sweetalert';
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
                <div className='mainContentShadow'>
                    <div className='Projects mainContent'>
                        <div className='mainContentTitle'><h1>Projects and Work</h1></div>
                        <div className='mainContentP'>
                            <p>Here are a few of my projects</p>


                        </div>
                        {/*===| Project section |=================================*/}




                        {/*===| Adventure App Project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://goodwindevelopmentinc.com:3002/#/' target='_blank'>
                                    <img src={AdventureApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Adventure App </h3>
                                <p className='projectDesc'>Personally-developed full-stack web application with some ideas from firewatch website, skullcandy checkout page, and myself which resolve the unexciting feel of ecommerce website experiences. </p>
                                <p className='projectDesc'>-Fully mobile-responsive with mobile responsive parallax. Users can login, search for campsites by the National Park API, view products in the shop, add products to the cart, and checkout using Stripe. </p>
                            </div>

                        </div>





                        {/*===| Work in progress project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://goodwindevelopmentinc.com:3002/#/' target='_blank'>
                                    <img src={WipApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> WIP (Work In Progress)</h3>
                                <p className='projectDesc'>LinkedIn-inspired Education Advancement Tool - Progress tracker. </p><p className='projectDesc'>Constructed the ability to upload images via Cloudinary and Dropzone Facilitated the transferal of user info to/from database by HTTP Requests
                            Demonstrated teamwork skills using trello and 10+ hrs of pair programming</p>
                            </div>

                        </div>



                        {/*===| another project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://goodwindevelopmentinc.com:3002/#/' target='_blank'>
                                    <img src={WipApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Project Title</h3>
                                <p className='projectDesc'>Description of project</p>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Projects;