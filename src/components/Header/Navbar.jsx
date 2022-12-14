import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={PUBLIC_URL + 'images/logo_header.png'} alt="logo_header"  />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/music'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Music
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/games'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Games
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
