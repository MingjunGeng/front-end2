import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

import pplogotoptight from '../images/pplogotoptight.jpeg'
import facebookPng from '../images/facebook.png'
import pinterestPng from '../images/pinterest.png'
import rssPng from '../images/rss.png'
import emailPng from '../images/email.png'
import mapMonth from '../images/map-month.png'

const Header = () => {
    return(
        <nav className="nav">
            <div className='nav-top'>
                <div className="left-img">
                    <a><img src={pplogotoptight} alt="A woman with a barbell on her back"/></a>
                    <a className='facebook'><img src={facebookPng} alt="facebook"/></a>
                    <a className='pinterest'><img src={pinterestPng} alt="pinterest"/></a>
                    <a className='rss'><img src={rssPng} alt="rss"/></a>
                    <a><img src={emailPng} alt="email"/></a>
                    
                </div>
                <div className="right-img">
                    <a> <img src={mapMonth} alt="A woman with a barbell on her back"/> </a>
                    
                </div>
            </div>
            <div className='nav-bar'>
                <div className="left-links">
                    <Link className="link" to='/'>Home</Link>
                </div>
                <div className="right-links">
                    <Link className="link" to='/login'>Login</Link>
                    <Link className="link" to='/login'>Logout</Link>
                </div>
            </div>

        </nav>
    )
}

export default Header;