import { Routes, Route } from 'react-router-dom';
import LogoLookUpPage from '../LogoLookUpPage';
import { Navbar } from './Navbar';
import SubmitFeedback from './SubmitFeedback';
import DocumentatioDetails from './DocumentatioDetails';

function LandingPage() {

    return (
        < > 
            <div className="container">
                <Navbar />   
                <Routes>
                    <Route path='/' element={<LogoLookUpPage />} />
                    <Route path='SubmitFeedback' element= {<SubmitFeedback />}/>
                    <Route path='DocumentatioDetails' element= {<DocumentatioDetails />}/>
                </Routes>
            </div>
        </>
    )
}

export default LandingPage;
