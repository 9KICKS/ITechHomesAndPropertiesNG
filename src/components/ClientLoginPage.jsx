import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/ClientLoginPage.css";
import iTechLogo from '../assets/images/iTechLogo.svg';

const ClientLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const hashedPassword = password;
        console.log('Email:', email);
        console.log('Hashed Password:', hashedPassword);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="container">
            <div className="page-content">
                <div className="col-md-6">
                    <img src={iTechLogo} alt="ITech logo" className="img-fluid"/>
                    <h2 className="mt-3 login-title">Log in to your account</h2>
                    <p className="welcome-message">Welcome back! Please enter your details.</p>
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

                            <Form.Group controlId="formBasicPassword" className="custom-input">
                                <Form.Label className="label-top">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <div className="remember-me-and-forgot-password">
                            <Form.Group controlId="formBasicCheckbox" className="remember-me-checkbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="remember-me-checkbox"
                                />
                            </Form.Group>
                            <a href="#" className="forgot-password-link">Forgot password</a>
                        </div>

                        <Button type="submit" style={{ width: "340px", borderRadius: "8px", border: "1px solid #7D0007", background: "#7D0007", boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)", color: "#FFF", fontFamily: "Inter, sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: 600, lineHeight: "24px", marginTop: "-10px" }}>
                            Sign In
                        </Button>

                        <Button type="button" style={{ width: "340px", marginTop: "15px", borderRadius: "8px", border: "1px solid #D0D5DD", background: "white", boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)", color: "#344054", fontFamily: "Inter, sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: 600, lineHeight: "24px" }}>
                            Sign in with Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ClientLoginPage;
