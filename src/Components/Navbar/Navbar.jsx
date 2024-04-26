import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.png';
import menuIcon from '../Assets/main-menu.png'; 
import cancelIcon from '../Assets/x.png';
import movingVdo from '../Assets/movingVdo.mp4';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#000';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>  
      <nav id="navbar">
      <div id="logo">
        <a href="/"><img src={logo} alt=""/></a>
      </div>

      {isMobile ? (
        <>
          <div className="menu-toggle" onClick={toggleDrawer}>
            {isDrawerOpen ? <i className="material-icons"></i> : <img src={menuIcon} alt="Menu" />}
          </div>

          <ul className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <li className="close-icon" onClick={toggleDrawer}><img src={cancelIcon} alt="" /></li>
            <li className="item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li className="item"><NavLink to="/Navservices" activeClassName="active">Services</NavLink></li>
            <li className="item"><NavLink to="projects/" activeClassName="active">Projects</NavLink></li>
            <li className="item"><NavLink to="/contact" activeClassName="active">contact  us</NavLink></li>
          </ul>
        </>
      ) : (
        <ul className="navbar-list">
          <li className="item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li className="item"><NavLink to="/Navservice" activeClassName="active">Services</NavLink></li>
          <li className="item"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li className="item"><NavLink to="/Contact" activeClassName="active">Contact us </NavLink></li>
        </ul>
      )}
    </nav>
   
    </>

  );
};

export default Navbar;
