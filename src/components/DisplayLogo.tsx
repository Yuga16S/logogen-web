import React, { useState, useEffect } from 'react';
import Button from "./Button";
import '../index.css';
import config from '../../config.json';

interface Props {
  responseUrl: string;
}
function DisplayLogo({ responseUrl }: Props) {
  const handleClick = () => {
    if (responseUrl) {
      window.location.href = responseUrl;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(responseUrl);
      alert('URL copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-2 box border border-dark rounded p-5">
        <div className="col">
          <div className="box">
            <img src={responseUrl} alt="Your Image" className="image-box" />
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