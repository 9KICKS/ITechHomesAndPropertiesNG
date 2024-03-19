import React from 'react';
import iTechLogo from "../assets/images/iTechLogo.svg";
import "../styles/TermsAndConditions.css";

const TermsAndConditions = () => {
    return (
        <div className="terms-conditions-page">
            <img src={iTechLogo} alt="ITech logo" className="img-fluid"/>

            <h1>Terms and Conditions</h1>
            <p>Welcome to iTech Homes and Properties, where we redefine real estate by integrating cutting-edge
                technology to enhance community living and make affordable living a reality in Nigeria.</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these terms and conditions. Please read
                them carefully. If you do not agree with any part of these terms, you may not use our services.</p>

            <h2>Property Listings</h2>
            <p>All property listings on our platform are subject to change and are based on availability. While we
                strive to provide accurate and up-to-date information, iTech Homes and Properties cannot guarantee the
                completeness or accuracy of the listings.</p>

            <h2>Use of Technology</h2>
            <p>Our services include the use of technology to enhance living experiences. Users agree to comply with any
                guidelines or requirements related to technology use within our properties.</p>

            <h2>Liability</h2>
            <p>iTech Homes and Properties will not be liable for any direct, indirect, incidental, or consequential
                damages arising from the use of our services or properties.</p>

            <h2>Amendments</h2>
            <p>We reserve the right to amend these terms and conditions at any time. Your continued use of our services
                following any changes constitutes your acceptance of those changes.</p>

            <p>Thank you for choosing iTech Homes and Properties. We are committed to making your dream of affordable
                living a reality.</p>

            <button className="t-and-c-button" onClick={() => window.location.href = "/signup"}>Accept</button>
        </div>
    );
}

export default TermsAndConditions;
