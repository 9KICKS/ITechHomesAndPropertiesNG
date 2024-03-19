import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../styles/ForgotPassword.css";
import iTechLogo from '../assets/images/iTechLogo.svg';
import backButton from "../assets/images/BackButton.svg";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/login');
    };

    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('Email:', email);
    };

    return (
        <div className="container">
            <div className="page-content">
                <div className="col-md-6">
                    <img src={iTechLogo} alt="ITech logo" className="img-fluid"/>
                    <h2 className="mt-3 forgot-password-title">Forgot password?</h2>
                    <p className="forgot-password-message">No worries, we’ll send you reset instructions.</p>
                    <Form onSubmit={handleLogin}>
                        <div className="form-group-container">
                            <Form.Group controlId="formBasicEmail" className="custom-input">
                                <Form.Label className="label-top">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <button type="submit" className="custom-button reset-password-button">
                            Reset password
                        </button>

                        <button type="button" onClick={handleBackClick} className="custom-button back-to-login-button">
                            <img src={backButton} alt="Back" className="back-button-svg"/>
                            Back to log in
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
