import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import "../styles/ClientSignUpPage.css";
import iTechLogo from '../assets/images/iTechLogo.svg';

const ClientSignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <div className="page-content">
                <div className="col-md-6">
                    <img src={iTechLogo} alt="ITech logo" className="img-fluid"/>
                    <h2 className="mt-3 login-title">Create your account</h2>
                    <p className="welcome-message">Welcome! Please enter your details to sign up.</p>
                    <Form onSubmit={handleSignUp}>
                        <div className="form-group-container">
                            <Form.Group controlId="formBasicFirstName" className="custom-input">
                                <Form.Label className="label-top">First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" value={firstName}
                                              onChange={(e) => setFirstName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicLastName" className="custom-input">
                                <Form.Label className="label-top">Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" value={lastName}
                                              onChange={(e) => setLastName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="custom-input">
                                <Form.Label className="label-top">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="custom-input">
                                <Form.Label className="label-top">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmPassword" className="custom-input">
                                <Form.Label className="label-top">Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword}
                                              onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </Form.Group>
                        </div>

                        <div className="already-have-account">
                            Already have an account? <a href="/login" className="custom-link">Sign In</a>
                        </div>

                        <button type="submit" className="custom-button sign-in-button">
                            Sign Up
                        </button>

                        <button type="button" className="custom-button google-sign-in-button">
                            Sign Up with Google
                        </button>

                        <div className="agreement-text">
                            By clicking the Sign Up button, you agree to our <br/>
                            <a href="/terms-and-conditions" className="custom-link">Terms and Conditions</a> and
                            <a href="/privacy-policy" className="custom-link"> Policy Privacy</a>.
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ClientSignUpPage;
