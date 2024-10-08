import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className="navbar">
            <div className=".navbar-container">
                <Link to="/" className="navbar-logo">
                    TANITI
                    <img src="images/logo.png" alt=""/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img src={click ? 'images/close.png' : 'images/hamburger.png'} alt=""/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                        <Link to='/' className='nav-links-left' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                            FAQ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/transportation' className='nav-links' onClick={closeMobileMenu}>
                            TRANSPORTATION
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/booknow' className='nav-links' onClick={closeMobileMenu}>
                            BOOK NOW!
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/lodging' className='nav-links-left' onClick={closeMobileMenu}>
                            LODGING
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/food' className='nav-links' onClick={closeMobileMenu}>
                            FOOD
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/entertainment' className='nav-links' onClick={closeMobileMenu}>
                            ENTERTAINMENT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/stores' className='nav-links' onClick={closeMobileMenu}>
                            STORES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sources' className='nav-link-sources' onClick={closeMobileMenu}>
                            MEDIA SOURCES
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
