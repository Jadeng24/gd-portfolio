import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (

            // home holder            
            <div className='homeHolder'>
                <Nav />

                {/*===| Home |=================================*/}
                <div className='mainContentShadow'>
                    <div className='Home mainContent'>

                        {/*===| Top section of home |=================================*/}

                        <div className='homeTop'>
                            <Link to='/about'><h1 className='title1'>
                                <span className='char'>H</span>
                                <span className='char'>i</span>
                                <span className='char'>, </span>
                                <span className='char'>i</span>
                                <span className='char'>'</span>
                                <span className='char'>m </span>
                                <span className='char'>J</span>
                                <span className='char'>a</span>
                                <span className='char'>d</span>
                                <span className='char'>e</span>
                                <span className='char'>n</span>
                                
                            </h1>
                                <h2 className='title2'>
                                    <span >A </span>
                                    <span >f</span>
                                    <span >u</span>
                                    <span >l</span>
                                    <span >l</span>
                                    <span >-</span>
                                    <span >s</span>
                                    <span >t</span>
                                    <span >a</span>
                                    <span >c</span>
                                    <span >k </span>
                                    <span >w</span>
                                    <span >e</span>
                                    <span >b </span>
                                    <span >d</span>
                                    <span >e</span>
                                    <span >v</span>
                                    <span >e</span>
                                    <span >l</span>
                                    <span >o</span>
                                    <span >p</span>
                                    <span >e</span>
                                    <span >r</span>
                                    </h2></Link>
                        </div>


                        {/*===| Mid section of home |=================================*/}

                        <div className='homeMid'>
                            <div className='homeMidTitleHolder'>
                                <h2 className='homeMidTitle'>My Expertise</h2>
                                <h4 className='homeMidSubTitle'>I've got skills in all phases of the development process</h4>
                            </div>

                            <div className='homeMid3Section'>
                                <div className='homeMidSection'>
                                    <h2>Ideas</h2>
                                    <p>I collaborate with clients and peers to establish and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
                                </div>

                                <div className='homeMidSection'>
                                    <h2>UI/UX</h2>
                                    <p>I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and high-performance designs. I'm a minimalist who truly believes that less is more.</p>
                                </div>

                                <div className='homeMidSection'>
                                    <h2>Code</h2>
                                    <p>I design front start to finish with the client and user experience always first in mind. I enjoy keeping code simple and using best practices creating a professional and maintainable website/application. </p>
                                </div>

                            </div>
                            <Link to='/projects'><h3>View my work</h3></Link>
                        </div>

                        <div className='homeBottom'>
                            <h1></h1>
                        </div>



                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;