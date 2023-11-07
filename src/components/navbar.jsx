import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/LorgnX' className='navbar-logo' onClick={closeMobileMenu} style={{color: "white", fontFamily: "Playfair Display, serif"}}>
                Lorgn X
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink to='/LorgnX#top' className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth
                to='/LorgnX#Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth
                to='/LorgnX#About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </HashLink>
              </li>
              <li className='nav-item'>
              <HashLink smooth
                to='/LorgnX#Gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </HashLink>
              </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;