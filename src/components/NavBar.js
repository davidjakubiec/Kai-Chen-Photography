import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [currPage, setCurrPage] = useState('home');

    useEffect(() => {
      const handleScroll = () => {
        const galleryButton = document.getElementsByClassName('nav-link')[2];
        const aboutButton = document.getElementsByClassName('nav-link')[1];
        const homeButton = document.getElementsByClassName('nav-link')[0];

        if (window.scrollY >= document.getElementById('gallery-page-container').offsetTop-1) {
          
          homeButton.style.transition = 'background-color 0.5s ease-in-out';
          homeButton.style.color = 'grey';
          aboutButton.style.color = 'grey';
          galleryButton.style.color = 'white';
          setCurrPage('gallery')
        } else if (window.scrollY >= document.getElementById('about-container').offsetTop) {
          
          aboutButton.style.transition = 'background-color 0.5s ease-in-out';
          homeButton.style.color = 'grey';
          aboutButton.style.color = 'white';
          galleryButton.style.color = 'grey';
          setCurrPage('about')
        } else if (window.scrollY >= document.getElementById('home-container').offsetTop) {
          
          homeButton.style.transition = 'background-color 0.5s ease-in-out';
          homeButton.style.color = 'white';
          aboutButton.style.color = 'grey';
          galleryButton.style.color = 'grey';
          setCurrPage('home')
        }

        // console.log('home', document.getElementById('about-container').offsetTop)
        // console.log('home', window.scrollY, document.getElementById('about-container').offsetTop)

        console.log(document.getElementsByClassName('nav-link')[0])
        console.log(currPage)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
        
      
    }, [currPage]);

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