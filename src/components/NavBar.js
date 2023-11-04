import React, { useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const {navBarBackground, setNavBarBackground} = useContext(Context);
    const handleNavBarClick = () => {
        // setNavBarBackground('transparent')
    }

  return (
    <div  className='nav'>
        <div className='logo'>
            <Link onClick={handleNavBarClick} className='nav-link'></Link>
        </div>
        <div className='nav-links'>
            <div className='nav-item'>
                <Link onClick={handleNavBarClick} className='nav-link' to='/'>
                    Home
                </Link>
            </div>
            <div className='nav-item'>
                <Link onClick={handleNavBarClick} className='nav-link' to='/about'>
                    About
                </Link>
            </div>
            <div className='nav-item'>
                <Link onClick={handleNavBarClick} className='nav-link' to='/gallery'>
                    Gallery
                </Link>
            </div>
            {/* <div className='nav-item'>
                <Link onClick={handleNavBarClick} className='nav-link' to='/contact'>
                    Contact
                </Link>
            </div> */}

        </div>
    </div>
  )
}

export default NavBar