import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';

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

                <div className='Home mainContent'>

                    {/*===| Top section of home |=================================*/}

                    <div className='homeTop'>
                        <h1 className='title1'>Hi, i'm Jaden</h1>
                        <h2 className='title2'>A full-stack web developer</h2>
                    </div>


                    {/*===| Mid section of home |=================================*/}

                    <div className='homeMid'>
                        <div className='homeMidTitleHolder'>
                            <h2 className='homeMidTitle'>My Expertise</h2>
                            <h4 className='homeMidSubTitle'>I've got skills in all phases of the design process</h4>
                        </div>

                        <div className='homeMid3Section'>
                            <div className='homeMidSection'>
                                <h2>Ideas</h2>
                                <p>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
                            </div>

                            <div className='homeMidSection'>
                                <h2>UI/UX</h2>
                                <p>I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.</p>
                            </div>

                            <div className='homeMidSection'>
                                <h2>Code</h2>
                                <p>I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.</p>
                            </div>

                        </div>
                    </div>

                    <div className='homeBottom'>
                        <h1></h1>
                    </div>



                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;