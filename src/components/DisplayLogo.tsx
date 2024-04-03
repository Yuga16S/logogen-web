import React,{useState, useEffect} from 'react';
import Button from "./Button";
import '../index.css';
import config from '/Users/yugapriya/Documents/bdec-projects/logogen-web/config.json';

interface Props {
    domainName: string;
}
function DisplayLogo({domainName}: Props){
const [imageUrl, setImageUrl] = useState<string>('');
const handleClick = () =>{
    if (imageUrl) {
        window.location.href = imageUrl;
      }
};

const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      alert('URL copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
};


useEffect(() => {
    const innerFunction = async (domainName: string) => {
        try {
            const response = await fetch(`${config.serverUrl}/api/logoUrl/${domainName}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                },
            });

            if (response) {
                const url = await response.text();
                setImageUrl(url);
            } else {
                console.error('Failed to fetch logo URL');
            }

        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
    innerFunction(domainName);
},[domainName]);
return (
        <div className="container">
          <div className="row justify-content-center mt-5 mb-2 box border border-dark rounded p-5">
            <div className="col">
              <div className="box">
                <img src={imageUrl} alt="Your Image" className="image-box" />
              </div>
            </div>
            <div className="col">
              <div className="box">
              <Button color='success' onClick={() => handleClick()}>Go to</Button>
              </div>
            </div>
            <div className="col">
              <div className="box">
              <Button color='success' onClick={() => handleCopy()}>Copy URL</Button>
              </div>
            </div>
          </div>
        </div>

);
}

export default DisplayLogo;