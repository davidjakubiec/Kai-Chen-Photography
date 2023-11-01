import React from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';


export function App() {

    const location = useLocation();

    return (
        <div>
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/gallery' element={<GalleryPage />}/>
                </Routes>
            </AnimatePresence>
            
            {/* <Gallery /> */}
        </div>
    );
};