import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import DetectLangauge from './DetectLanguage.js';
import SupportedLanguages from './SupportedLanguages.js';


function AppRoutes(){
    return (
        <div>
            <Routes>
               <Route exact path='/' Component={Home}/> 
                <Route exact path='/detect' Component={DetectLangauge} />
                <Route exact path='/supportedlanguages' Component={SupportedLanguages} /> 

            </Routes>
        </div>
    )
};


export default AppRoutes;