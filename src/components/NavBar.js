import React, { useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const scrollHome = () => {
        // Find the DOM node of the section you want to scroll to
        const section = document.getElementById('home-container');
    
        // Scroll to the section with smooth animation
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollAbout = () => {
        // Find the DOM node of the section you want to scroll to
        const section = document.getElementById('about-container');
    
        // Scroll to the section with smooth animation
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollGallery = () => {
        // Find the DOM node of the section you want to scroll to
        const section = document.getElementById('gallery-page-container');
    
        // Scroll to the section with smooth animation
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div  className='nav'>

        <div className='nav-links'>
            <div onClick={scrollHome} className='nav-item'>
                <div className='nav-link' >
                    Home
                </div>
            </div>
            <div onClick={scrollAbout}className='nav-item'>
                <div className='nav-link' >
                    About
                </div>
            </div>
            <div onClick={scrollGallery} className='nav-item'>
                <div className='nav-link' >
                    Gallery
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar