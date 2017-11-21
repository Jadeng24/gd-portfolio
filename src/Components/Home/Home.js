import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
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
                <div className='leftNav'>    
                <Nav />
                 </div>
                {/*===| Home |=================================*/}
                
                <div className='Home'>
                    {/* top section */}
                    <div className='homeTop'>
                        <h1>Web developer</h1>
                    </div>






                </div>
            </div>
        )
    }
}
export default Home;