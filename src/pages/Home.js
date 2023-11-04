import React, { useContext, useEffect } from 'react'
import { Context } from '../App'

import { motion } from 'framer-motion'
import videosource from '../../assets/videos/mauidronefootage.MP4'

const Home = () => {

    const {navBarBackground, setNavBarBackground} = useContext(Context);

useEffect(() => {
        setNavBarBackground('transparent')
    }, []);

  return (
    <div className="video-container">
        <div className='homepage-gradient'/>
        <video autoPlay muted loop id="video-background">
        <source src={videosource} type="video/mp4" />

        </video>

        <h1>Kai Chen <br/> Photography</h1>

        <motion.div 
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
    </div>
  )
}

export default Home