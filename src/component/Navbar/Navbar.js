import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import Dropdown from './Dropdown';
import './Navbar.css';
import '../../App.css';

function NavBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };



    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <a href="/" className="navbar-logo">
                    <img src={Logo}/>
                </a>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                        SERVICE <i className="fas fa-caret-down"/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;