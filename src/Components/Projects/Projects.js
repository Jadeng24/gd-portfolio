import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import Macbook from '../Assets/macbook.png';
import WipApp from '../Assets/WipLanding.png';
import AdventureApp from '../Assets/landing.png';
import PopUpTravelApp from '../Assets/popuptravel.png';
import GobiOutDoors from '../Assets/GobiOutdoors.png';
import CommHealthConnect from '../Assets/chc.png';
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
                                <a href='http://adventure.goodwindev.tech' target='_blank'>
                                    <img src={AdventureApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Adventure App </h3>
                                <p className='projectDesc'>Personally-developed full-stack web application with some ideas from firewatch website, skullcandy checkout page, and myself which resolve the unexciting feel of ecommerce website experiences. </p>
                                <p className='projectDesc'>-Fully mobile-responsive with mobile responsive parallax. Users can login, search for campsites by the National Park API, view products in the shop, add products to the cart, and checkout using Stripe. </p>
                            </div>

                        </div>


                        {/*===| Community Health Connect project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='https://www.utahchc.org/' target='_blank'>
                                    <img src={CommHealthConnect} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Community Health Connect </h3>
                                <p className='projectDesc'>During my time at Utah Valley University, I worked along side a team of 8 students to create a new website for CHC. They are a non-profit organization that strives to bring health care to the low-income community. I coded the front-end of the website while the other students handled sitemap and wireframe, UI/UX, and advertizing videos.</p>
                            </div>

                        </div>



                        {/*===| Work in progress project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://wip.goodwindev.tech' target='_blank'>
                                    <img src={WipApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> WIP </h3>
                                <p className='projectDesc'>LinkedIn-inspired Education Advancement Tool - Progress tracker. </p><p className='projectDesc'>Constructed the ability to upload images via Cloudinary and Dropzone Facilitated the transferal of user info to/from database by HTTP Requests
                            Demonstrated teamwork skills using trello and 10+ hrs of pair programming</p>
                            </div>

                        </div>
                        



                        {/*===| Work in progress project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://popuptravel.net' target='_blank'>
                                    <img src={PopUpTravelApp} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Pop Up Travel (In-Progress)</h3>
                                <p className='projectDesc'> Pop-up trailer website with e-commerse product / cart features. Admin page using axios calls to get, add, and delete products and pictures. Implemented Stripe Checkout. Handling user data with Node using PostrgreSQL database with massive and express.   </p>
                            </div>

                        </div>

                       



                        {/*===| Gobi outdoors project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='http://gobioutdoors.com' target='_blank'>
                                    <img src={GobiOutDoors} alt='project1' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'>Gobi Outdoors (In-Progress)</h3>
                                <p className='projectDesc'>Website for outdoor equipment / camping trailers, electric ARB fridges, and Roof top tents.</p>
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