import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import gdLogo from '../Assets/gdLogo.png';

class Nav extends Component {
    render() {
        return (
            <div className='NavHolder'>
                <div className='Nav'>


                    <Link to={'/'}>
                        <div className='imageHolder'>
                            <img src={gdLogo} alt='GD' className='gdLogo' />
                            <div className='imageMask'></div>
                        </div>
                    </Link>


                    <Link to={'/projects'}> Projects </Link>


                    <Link to={'/contact'}> Contact </Link>
                </div>
            </div>
        )
    }
}
export default Nav;