import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import gdLogoWhite from '../Assets/gdLogoWhite.png';
import fbLogo from '../Assets/facebookWhite.png';
import LinLogo from '../Assets/linkedInWhite.png';
import pinLogo from '../Assets/pinterestWhite.png';
import insLogo from '../Assets/instagramWhite.png';
import twiLogo from '../Assets/twitterWhite.png';    
class Nav extends Component {
    render() {
        return (
            <div className='NavHolder'>
                <div className='Nav'>


                    <div className='navSection logoNav'>
                        <div className='imageHolder'>
                            <Link to={'/'}><img src={gdLogoWhite} alt='GD' className='gdLogo' /> </Link>
                        </div>
                    </div>

                    <div className='navSection centerNav'>
                        <Link to={'/about'}> ABOUT </Link>
                        <Link to={'/projects'}> PROJECTS </Link>
                        <Link to={'/skills'}> SKILLS </Link>
                        <Link to={'/contact'}> CONTACT</Link>
                    </div>

                    <div className='navSection rightNav'>
                        <img src={fbLogo} alt='logo' />
                        <img src={LinLogo} alt='logo' />
                        <img src={twiLogo} alt='logo' />
                        <img src={insLogo} alt='logo' />
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;