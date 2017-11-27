import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// main logo
import gdLogoWhite from '../Assets/gdLogoWhite.png';
// nav icons
import ProjectIcon from '../Assets/codeIconWhite.png';
import ContactIcon from '../Assets/contactWhite.png';
import AboutIcon from '../Assets/aboutWhite.png';
import SkillsIcon from '../Assets/skillWhite.png';

// social icons 
import fbLogo from '../Assets/facebookWhite.png';
import LinLogo from '../Assets/linkedInWhite.png';
import pinLogo from '../Assets/pinterestWhite.png';
import insLogo from '../Assets/instagramWhite.png';
import twiLogo from '../Assets/twitterWhite.png';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            toggleMenu: false
        }

        this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
    }
    toggleMenuFunc() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }
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
                        <a href='https://www.facebook.com/jadengoodwin24' target='_blank'><img src={fbLogo} alt='logo' /></a>
                        <a href='https://www.linkedin.com/in/jaden-goodwin-7475bb13a/' target='_blank'><img src={LinLogo} alt='logo' /></a>
                        <a href='https://twitter.com/Goodwin_Dev' target='_blank'><img src={twiLogo} alt='logo' /></a>
                        <a href='https://www.instagram.com/jaden_g24/' target='_blank'><img src={insLogo} alt='logo' /></a>
                    </div>
                    {/* drop down menu button */}
                    <div className='dropDownMenuBtn' onClick={this.toggleMenuFunc}>
                        <div className={this.state.toggleMenu ? 'bar bar1 animateBar1' : 'bar bar1'}></div>
                        <div className={this.state.toggleMenu ? 'bar midBar1 animateMidBar1' : 'bar midBar1'}></div>
                        <div className={this.state.toggleMenu ? 'bar midBar2 animateMidBar2' : 'bar midBar2'}></div>
                        <div className={this.state.toggleMenu ? 'bar bar3 animateBar3' : 'bar bar3'}></div>

                    </div>
                </div>

                {/*===| DROP DOWN MENU |=================================*/}
                <div className={this.state.toggleMenu ? 'dropDownMenuHolder' : 'dropDownMenuHolder hideHolder'}>
                    <div className={this.state.toggleMenu ? 'dropDownMenu displayMenu' : 'dropDownMenu hideMenu'}>
                        {/* menuSectionHolder*/}
                        <div className='menuSectionHolder'>
                            {/* section page links  */}
                            <div className={this.state.toggleMenu ? 'menuPageLinksHolder showLinks' : 'menuPageLinksHolder hideLinks'}>
                                <Link to={'/about'}><p className='menuPageLink'>ABOUT</p></Link>
                                <Link to={'/projects'}><p className='menuPageLink'>PROJECTS</p></Link>
                                <Link to={'/skills'}><p className='menuPageLink'>SKILLS</p></Link>
                                <Link to={'/contact'}><p className='menuPageLink'>CONTACT</p></Link>
                            </div>

                            {/* section - social links */}
                            <div className={this.state.toggleMenu ? 'menuSocialLinksHolder showSocialLinks' : 'menuSocialLinksHolder hideSocialLinks'}>
                                <a href='https://www.facebook.com/jadengoodwin24' target='_blank'><img src={fbLogo} alt='logo' /></a>
                                <a href='https://www.linkedin.com/in/jaden-goodwin-7475bb13a/' target='_blank'><img src={LinLogo} alt='logo' /></a>
                                <a href='https://twitter.com/Goodwin_Dev' target='_blank'><img src={twiLogo} alt='logo' /></a>
                                <a href='https://www.instagram.com/jaden_g24/' target='_blank'><img src={insLogo} alt='logo' /></a>
                            </div>

                        </div>{/* end of menuSectionHolder */}

                    </div>
                </div>

            </div>
        )
    }
}
export default Nav;