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
    </div>
  )
}

export default Home