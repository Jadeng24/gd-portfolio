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
                    {/* top section */}
                    <div className='homeTop'>
                        <h1 className='title1'>Hi, i'm Jaden</h1>
                        <h2 className='title2'>A full-stack web developer</h2>
                    </div>
                    <div className='homeMid'>
                        <p>content</p>
                    </div>

                    <div className='homeBottom'>
                        <h1></h1>
                    </div>



                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home;