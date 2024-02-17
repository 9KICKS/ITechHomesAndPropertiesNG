import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../styles/OTPPage.css";
import mail from "../assets/images/Mail.svg";
import backButton from "../assets/images/BackButton.svg";

const OTPPage = () => {
    const [otp, setOTP] = useState(['', '', '', '']);

    const handleContinue = (e) => {
        e.preventDefault();
        // Combine OTP digits and handle OTP verification
        const otpValue = otp.join('');
        // Add logic to handle OTP verification and navigation
    };

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
    };

    const handleResend = () => {
        // Add logic to resend OTP
    };

    const handleBackToLogin = () => {
        // Add logic to navigate back to login page
    };

    return (
        <div className="container">
            <div className="page-content">
                <div className="col-md-6">
                    <img src={mail} alt="Email" className="email-svg"/>
                    <h2 className="mt-3 otp-title">Check your email</h2>
                    <p className="otp-message">We sent an OTP to your email</p>
                    <Form onSubmit={handleContinue}>
                        <div className="otp-input-group">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="otp-digit-input"
                                    required
                                />
                            ))}
                        </div>
                        <button type="submit" className="otp-submit-button">
                            Continue
                        </button>
                    </Form>
                    <p className="mb-3 resend-otp-link">
                        Didn’t receive the email?&nbsp;
                        <a href="#" onClick={handleResend} className="resend-link">Click to resend</a>
                    </p>
                    <button type="button" className="custom-button back-to-login-button">
                        <img src={backButton} alt="Back" className="back-button-svg"/>
                        Back to log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPPage;
