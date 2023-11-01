import React from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom'


export function App() {

    const location = useLocation();

    return (
        <div>
            <NavBar />
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
            {/* <Gallery /> */}
        </div>
    );
};