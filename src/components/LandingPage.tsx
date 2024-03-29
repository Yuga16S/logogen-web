import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogoLookUpPage from '../LogoLookUpPage';
import { Navbar } from './Navbar'
import SubmitLogoDetailsPage from './SubmitLogoDetailsPage'


function LandingPage() {

    return (
        < > 
            <div className="container">
                <Navbar />   
                <Routes>
                    <Route path='LogoLookUpPage' element={<LogoLookUpPage />} />
                    <Route path='SubmitLogoDetailsPage' element= {<SubmitLogoDetailsPage />}/>
                </Routes>
            </div>
        </>
    )
}

export default LandingPage;
