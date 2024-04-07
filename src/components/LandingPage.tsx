import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoLookUpPage from '../LogoLookUpPage';
import { Navbar } from './Navbar';
import SubmitFeedback from './SubmitFeedback';
import DocumentatioDetails from './DocumentatioDetails';
import AboutUs from './AboutUs';

function LandingPage() {

    return (
        < > 
            <div className="container">
                <Navbar />   
                <Routes>
                    <Route path='LogoLookUpPage' element={<LogoLookUpPage />} />
                    <Route path='SubmitFeedback' element= {<SubmitFeedback />}/>
                    <Route path='DocumentatioDetails' element= {<DocumentatioDetails />}/>
                    <Route path='AboutUs' element= {<AboutUs />}/>
                </Routes>
            </div>
        </>
    )
}

export default LandingPage;
