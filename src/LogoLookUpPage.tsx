import DisplayLogo from "./components/DisplayLogo";
import Button from "./components/Button";
import { useState } from "react";
import config from '../config.json';
import { SpinningCircles } from 'react-loading-icons';


function App() {

  const [domainName, setDomainName] = useState('');
  const [displayLogo, setDisplayLogo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseUrl, setResponseUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const handleClick = async (domainName: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${config.serverUrl}/api/logoUrl/${domainName}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      });

      const url = await response.text();
      if (url) {
        setResponseUrl(url);
        setLoading(false);
        setDisplayLogo(true);
        setErrorMessage(false);
      } else {
        setDisplayLogo(false);
        setErrorMessage(true);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    } finally {
      setLoading(false);
    }

  }
  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-5 mb-3">
          <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
            <label htmlFor="domain-name" className="form-label" style={{ marginRight: '10px', color: 'black' }}> Domain </label>
            <input type="text" className="form-control" id="domain-name" value={domainName} onChange={(e) => { setDisplayLogo(false); setErrorMessage(false); setDomainName(e.target.value) }} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-1">
          <Button onClick={() => handleClick(domainName)}>Look Up</Button>
        </div>
      </div>
      {!loading ? (
      <div className="d-flex justify-content-center mt-3 mb-3">
        {displayLogo && <DisplayLogo responseUrl={responseUrl} />}
      </div> ):(<div className="d-flex justify-content-center align-items-center mt-3 mb-3"> <SpinningCircles/> </div>)}
      {errorMessage && ( <div className="d-flex justify-content-center mt-3 mb-3"><p style={{ color: 'white', fontSize: '20px' }}>Unfortunately, the logo you are searching for cannot be found.</p></div>)}
    </>
  );
}
export default App; // allowing others to import this component so it can be user else where
