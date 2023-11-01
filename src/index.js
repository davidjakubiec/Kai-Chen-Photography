require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const appElement = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes>
        </Router>
    </React.StrictMode>
    , appElement);