import React from 'react';
import iTechLogo from "../assets/images/iTechLogo.svg";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <img src={iTechLogo} alt="ITech logo" className="img-fluid"/>

            <h1>Privacy Policy</h1>
            <p>At iTech Homes and Properties, we understand the importance of privacy in the digital age, especially
                when it comes to real estate transactions and community living. This policy outlines how we collect,
                use, protect, and disclose information gathered from our users and clients.</p>

            <h2>Information Collection</h2>
            <p>We collect information to provide better services to all of our users. This includes personal information
                such as your name, contact information, and financial details related to property transactions.</p>

            <h2>Use of Information</h2>
            <p>Your information is used to process transactions, provide customer support, enhance your user experience,
                and inform you about our products and services, including any updates and promotions.</p>

            <h2>Data Protection</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However,
                no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

            <h2>Sharing of Information</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information
                without your consent, except as necessary to provide the service or comply with the law.</p>

            <h2>Consent</h2>
            <p>By using our services, you consent to our privacy policy.</p>

            <h2>Changes to Our Privacy Policy</h2>
            <p>Any changes to our privacy policy will be posted on this page.</p>

            <p>We are committed to the security of your data and to being transparent about our practices. Thank you for
                trusting iTech Homes and Properties with your real estate needs.</p>

            <button className="privacy-button" onClick={() => window.location.href = "/signup"}>Continue</button>
        </div>
    );
}

export default PrivacyPolicy;
