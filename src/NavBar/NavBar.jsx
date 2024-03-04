import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '/src/NavBar/NavBar.css';
import logo from '/logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NavBar() {

const [isOpen, setIsOpen] = useState(false);
const [navBar, setNavBar] = useState(false);
const location = useLocation();

const toggleMenu = (event) => {
    event.stopPropagation(); 
    setIsOpen(!isOpen);
  };

useEffect(() => {
    const closeMenu = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]); 

  useEffect(() => {
    setNavBar(location.pathname.startsWith('/dashboard'));
  }, [location]);
  

return (
    <nav>
    <Link to={navBar ? "/dashboard/welcome" : "/"}><img className='logo' src={logo} alt='Logo'></img></Link>
    <div className='burger-menu' onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={isOpen ? 'nav-active' : ''}>
      {navBar ? (
        
        // Dashboard-specific links
        <>
          <li><NavLink to="/dashboard/welcome">DASHBOARD</NavLink></li>
          <li><NavLink to="/dashboard/profile">PROFILE</NavLink></li>
          <li><NavLink to="/dashboard/academicplan">ACADEMIC PLAN</NavLink></li>
          <li><NavLink to="/dashboard/notes">NOTES</NavLink></li>
          <li><NavLink to="/dashboard/support">SUPPORT</NavLink></li>
          <li><NavLink to="/">SIGN OUT</NavLink></li>
        </>
      ) : (

        // General links
        <>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/features">FEATURES</NavLink></li>
          <li><NavLink to="/pricing">PRICING</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">CONTACT US</NavLink></li>
          <li><NavLink to="/login">LOGIN/SIGN UP</NavLink></li>
        </>
      )}
    </ul>
  </nav>
);
}

export default NavBar; 