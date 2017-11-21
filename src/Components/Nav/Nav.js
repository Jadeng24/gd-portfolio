import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// main logo
import gdLogoWhite from '../Assets/gdLogoWhite.png';
// nav icons
import ProjectIcon from '../Assets/codeIconWhite.png';
import ContactIcon from '../Assets/contactWhite.png';
import AboutIcon from '../Assets/aboutWhite.png';
import SkillsIcon from '../Assets/skillsWhite1.png';

// social icons 
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
                        <div className='gdLogoHolder'>
                            <Link to={'/'}><img src={gdLogoWhite} alt='GD' className='gdLogo' /> </Link>
                        </div>
                    </div>

                    <div className='navSection centerNav'>
                        <Link to={'/about'}><div className='imgLinkHolder'><img src={AboutIcon} /><p className='linkName'>ABOUT</p></div></Link>
                        <Link to={'/projects'}><div className='imgLinkHolder'><img src={ProjectIcon} /><p className='linkName'>PROJECTS</p></div></Link>
                        <Link to={'/skills'}><div className='imgLinkHolder'><img src={SkillsIcon} /><p className='linkName'>SKILLS</p></div></Link>
                        <Link to={'/contact'}><div className='imgLinkHolder'><img src={ContactIcon} /><p className='linkName'>CONTACT</p></div></Link>
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