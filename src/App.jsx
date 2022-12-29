import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css'

import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Main from './Routes/Main/Main.jsx'
import Albums from './Routes/Albums/Albums.jsx';
import About from './Routes/About/About.jsx';
import Authors from './Routes/Authors/Authors';

import main_json from './assets/data/Main.json';
import albums_json from './assets/data/Albums.json';
import Posts from './Routes/Posts/Posts';

import { useLocation } from "react-router-dom";
import queryString from "query-string";

function App(){
    return (
            <div className='app-container'>
                <Header name_site='Эстетика Края'/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <div className="app-content">
                        <div className='app-inner-content'>
                            <Routes>
                                <Route 
                                    path="/" 
                                    element={<Main data={main_json}/>}
                                />
                                <Route path="/albums" element={<Albums data={albums_json}/>}/>
                                <Route path='/albums/album' element={<Posts album={albums_json[queryString.parse(useLocation().search).id]}/>}/>
                                <Route 
                                    path="/about" 
                                    element={<About />}
                                />
                                <Route 
                                    path="/authors" 
                                    element={<Authors />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default App;