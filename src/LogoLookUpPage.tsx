import DisplayLogo from "./components/DisplayLogo";
import Button from "./components/Button";
import { useState } from "react";
import config from '/Users/yugapriya/Documents/bdec-projects/logogen-web/config.json';


function App() {

const [domainName, setDomainName] =  useState('');
const [displayLogo, setDisplayLogo] = useState(false);
const handleClick = async (domainName: string) => {
  try {
    const response = await fetch(`${config.serverUrl}/api/companyName/${domainName}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
    });

    if (response) {
      setDisplayLogo(true);
    } else {
      console.error('Failed to fetch company name');
    }
  } catch (error) {
    console.error('Error during fetch:', error);
  }

}
return (
<>
<div>
    <div className="d-flex justify-content-center mt-5 mb-3">
      <div className="input-group mb-3" style={{ maxWidth: '500px' }}> 
        <label htmlFor="domain-name" className="form-label" style={{ marginRight: '10px', color: 'white'}}> Domain </label>
        <input type="text" className="form-control" id="domain-name" value={domainName} onChange={(e) => setDomainName(e.target.value)}/>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5 mb-1">
      <Button onClick={() => handleClick(domainName)}>Look Up</Button>
    </div>
</div>
<div className="d-flex justify-content-center mt-3 mb-3">
  {displayLogo && <DisplayLogo domainName={domainName} />}
</div>    
</>
);
}
export default App; // allowing others to import this component so it can be user else where
