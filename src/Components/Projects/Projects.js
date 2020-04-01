import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import Macbook from '../Assets/macbook.png';
import WipApp from '../Assets/WipLanding.png';
import AdventureApp from '../Assets/landing.png';
import BlipMarketplace from '../Assets/blipMarketplace.png';
import PopUpTravelApp from '../Assets/popuptravel.png';
import BlipSupply from '../Assets/BlipSupply.jpg';
import CommHealthConnect from '../Assets/chc.png';
import SharendipityVideo from '../Assets/sharendipity.mp4';
import iPhoneXFrame from '../Assets/iPhoneX.png';
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


                        {/*===| Blip Supply project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='https://operator.blipbillboards.com/' target='_blank'>
                                    <img src={BlipSupply} alt='Supply' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'>Operator Sign Admin</h3>
                                <p className='projectDesc'>An Angular application converted from an old AngularJs app to a new Angular8+ with Material Design application.</p>
                            </div>
                        </div>


                        {/*===| Blip Marketplace project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='https://marketplace.blipbillboards.com/' target='_blank'>
                                    <img src={BlipMarketplace} alt='Marketplace' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'>Blip Marketplace</h3>
                                <p className='projectDesc'>No contract digital billboard advertising for small and medium-sized businesses. Built with Angular 8 with material Design with a Python Django backend.  </p>
                            </div>
                        </div>


                        {/*===| Sharendipity Mobile App |=================================*/}
                        <div className='projectHolder'>
                            <a href='https://itunes.apple.com/us/app/sharendipity/id1254290901?mt=8' target='_blank'>
                                <div className="iPhoneXHolder">
                                    <img src={iPhoneXFrame} className='iPhoneXFrame' />
                                    <video className="videoPlayer" autoPlay="true" loop>
                                        <source src={SharendipityVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </a>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Sharendipity </h3>
                                <p className='projectDesc'>A way to share your things and keep track of who is borrowing your items. Find things you are looking for without having to buy or rent.</p>
                                <p className='projectDesc'> Built data intensive pages with rich components with 10+ pages. Also Developed all front-end with Angular 2+ with Ionic Native.
                                <br />  Available on the App store and Google Play store. </p>
                            </div>
                        </div>


                        {/*===| Adventure App Project |=================================*/}
                        <div className='projectHolder'>
                            <div className='macbookHolder'>
                                <a href='https://github.com/Jadeng24/adventure-app' target='_blank'>
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
                                    <img src={CommHealthConnect} alt='project2' className='projectImg' />
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
                                <a href='https://github.com/Work-In-Progress-DevMtn/Work-In-Progress' target='_blank'>
                                    <img src={WipApp} alt='project3' className='projectImg' />
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
                                <a href='https://github.com/Jadeng24/popUp-travel' target='_blank'>
                                    <img src={PopUpTravelApp} alt='project4' className='projectImg' />
                                </a>
                            </div>
                            <div className='projectInfoHolder'>
                                <h3 className='projectTitle'> Pop Up Travel (In-Progress)</h3>
                                <p className='projectDesc'> Pop-up trailer website with e-commerse product / cart features. Admin page using axios calls to get, add, and delete products and pictures. Implemented Stripe Checkout. Handling user data with Node using PostrgreSQL database with massive and express.   </p>
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