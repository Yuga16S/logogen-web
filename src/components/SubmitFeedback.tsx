import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import config from '../../config.json';
import { Link } from 'react-router-dom';
import LogoLookUpPage from '../LogoLookUpPage';

export const SubmitFeedback = () => {
    const [feedbackText, setFeedbackText] = useState('');
    const [emailID, setEmailID] = useState('');
    const [thanksState, setThanksState] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await axios.post(`${config.serverUrl}/api/saveFeedback`, {
                feedback: feedbackText, //this is the key: value pair JSON, name of key should be exactly the same as models field name and the db column name
                emailId: emailID
            }, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                }
            });
            // Clear form fields after submission
            setFeedbackText('');
            setEmailID('');
            setThanksState(true);
        } catch (error) {
            console.error('Error saving feedback:', error);
        }
    };


    return (
        <>
        {!thanksState ? (
            <div className="container" style={{ maxWidth: '400px', maxHeight: '400px', margin: '50px auto 100px auto' }}>
                <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>Submit Feedback</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center mt-5 mb-3">
                            <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                                <label className="form-label" style={{ marginRight: '10px', fontWeight: 'bold', color: 'black' }}>
                                    Feedback &nbsp;&nbsp;&nbsp;
                        <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5 mb-3">
                            <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                                <label className="form-label" style={{ marginRight: '10px', fontWeight: 'bold', color: 'black' }}>
                                    Email ID &nbsp;&nbsp;&nbsp;
                        <input type="email" value={emailID} onChange={(e) => setEmailID(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5 mb-1">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </form>
                </div>
            </div> ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '40px', color: 'black' }}> <br></br><br></br>Thank you for submitting your feedback! We've received it. <br></br>If you've provided us with your email, we'll get back to you, if necessary. <br></br></p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="d-flex justify-content-center mt-5 mb-1">
                                    <a href="../LogoLookUpPage" className="btn btn-danger">Home</a>
                                </td>
                                <td className="d-flex justify-content-center mt-5 mb-1">
                                    <a href="/SubmitFeedback" className="btn btn-danger">Submit another feedback</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> )}
        </>
    );
}

export default SubmitFeedback;


