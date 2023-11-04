import React, { useState } from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export const Context = React.createContext();


export function App() {

    const location = useLocation();
    const [navBarBackground, setNavBarBackground] = useState('transparent')

    const contextObject = { navBarBackground, setNavBarBackground };



    return (
        <div className='app-container'>
            <Context.Provider value={contextObject}>
            <NavBar />
                <section className='home-container' id='home-container'>
                    <Home />
                </section>
                <section className='about-container' id='about-container'>
                    <About />
                </section>
                <section className='gallery-page-container' id='gallery-page-container'>
                    <GalleryPage />
                </section>
            </Context.Provider>
        </div>
    );
};