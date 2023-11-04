import React, { useContext, useEffect } from 'react'
import { Context } from '../App'

const About = () => {


  return (
    
    <div>
        <div className='about-title'>
            <h2>Hi, I'm Kai. Nature</h2>
            <h2>photographer from California</h2>
            <p className='about-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='about-photo-container'>
            <img className='about-photo' src='https://images.squarespace-cdn.com/content/v1/55ffbe15e4b04e8914439ca4/1444170778540-96E0LERKFV69WER58J6T/image-asset.jpeg?format=2500w'/>    
        </div>

    </div>
  )
}

export default About