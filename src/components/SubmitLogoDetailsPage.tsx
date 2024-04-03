import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import config from '../../config.json';


const submitLogoDetailsPage = () => {
    const [companyName, setCompanyName] = useState('');
    const [domain, setDomain] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await axios.post('${config.serverUrl}/api/save', { companyName, domain, url });
            alert('Logo details submitted for approval.');
            // Clear form fields after submission
            setCompanyName('');
            setDomain('');
            setUrl('');
        } catch (error) {
            console.error('Error saving logo details:', error);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', maxHeight: '400px', margin: '50px auto 100px auto' }}>
            <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center' , color: 'white'}}>Save Logo Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                        <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                            <label className="form-label" style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>
                                Company Name &nbsp;&nbsp;&nbsp;   
                        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5 mb-3">
                        <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                            <label className="form-label" style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>
                                Domain &nbsp;&nbsp;&nbsp;  
                        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5 mb-3">
                        <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                            <label className="form-label" style={{ marginRight: '10px', fontWeight: 'bold', color: 'white'  }}>
                                URL &nbsp;&nbsp;&nbsp;
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5 mb-1">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default submitLogoDetailsPage;


