import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../images/contact.png';
import menu from '../../images/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <nav className='navbar'>
            <img src={logo} className='logo' alt="logo image" />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' smooth={true} spy={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
                <Link activeClass='active' to='tabs' smooth={true} spy={true} offset={-100} duration={500} className="desktopMenuItem">About</Link>
                <Link activeClass='active' to='mywork' smooth={true} spy={true} offset={-60} duration={500} className="desktopMenuItem">Projects</Link>
            </div>
            <button className='desktopBtn' onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="contact image" className='desktopBtnImg' />
                Contact Me
            </button>
            <img src={menu} className='mobMenu' alt="menu" onClick={() => { setShowMenu(!showMenu) }} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' smooth={true} spy={true} offset={-100} duration={500} className="listItem" onClick={handleLinkClick}>Home</Link>
                <Link activeClass='active' to='tabs' smooth={true} spy={true} offset={-100} duration={500} className="listItem" onClick={handleLinkClick}>About</Link>
                <Link activeClass='active' to='mywork' smooth={true} spy={true} offset={-60} duration={500} className="listItem" onClick={handleLinkClick}>Projects</Link>
                <Link activeClass='active' to='contact' smooth={true} spy={true} offset={-100} duration={500} className="listItem" onClick={handleLinkClick}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
