import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import iTechLogo from '../assets/images/iTechLogo.svg';
import pictureFrame from '../assets/images/PictureFrame.svg';
import theTeam from '../assets/images/TheTeam.svg';
import managingDirector from '../assets/images/ManagingDirector.svg';
import managingPartner from '../assets/images/ManagingPartner.svg';
import chiefOperationsOfficer from '../assets/images/ChiefOperationsOfficer.svg';
import theRemainingTeam from '../assets/images/TheRestOfTheTeam.png';
import ileri from '../assets/images/Ileri.svg';
import grandeEstate from '../assets/images/GrandeEstate.svg';
import user from '../assets/images/User.svg';
import comment from '../assets/images/Comment.svg';
import stats from '../assets/images/Stats.svg';
import protect from '../assets/images/PROtect.svg';
import email from '../assets/images/Email.svg';
import office from '../assets/images/Office.svg';
import phone from '../assets/images/Phone.svg';
import TopNav from "./TopNav";

const LandingPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="itech-landing-page font-poppins">
            <TopNav />

            <div className="picture-frame-container relative text-center" data-aos="fade-up">
                <img src={pictureFrame} alt="Frame" className="picture-frame w-full" />
                <div className="picture-content absolute top-1/2 left-1/2 translate-middle">
                    <h1 className="text-white text-4xl font-semibold mb-3" data-aos="fade-up">Affordable living meets technological innovation</h1>
                    <h2 className="text-white text-lg mb-5" data-aos="fade-up">We've made real estate accessible to everyone through a secure and straightforward approach, ensuring
                        profitable <br/> outcomes for all.</h2>
                    <div className="picture-content-buttons" data-aos="fade-up">
                        <button className="sign-up-button btn btn-primary me-3">Sign up as agent</button>
                        <button className="login-button btn btn-outline-primary">Get started</button>
                    </div>
                </div>
            </div>

            <div className="about-itech-container mt-5 container" data-aos="fade-up">
                <h1 className="text-center mb-3">At iTech Homes and Properties, we</h1>
                <h1 className="text-center mb-3">redefine real estate by making</h1>
                <h1 className="text-center mb-3">affordable living a reality.</h1>
                <h2 className="text-center mb-5">Our commitment goes beyond providing affordable living spaces; <br/> we integrate cutting-edge technology to enhance
                    community <br/> living.</h2>
            </div>

            <div className="the-team-container mt-5 d-flex justify-content-center align-items-center" data-aos="fade-up">
                <img src={theTeam} alt="The team" className="img-fluid" />
            </div>

            <div className="meet-the-team-container py-5 bg-light mt-5" data-aos="fade-up">
                <div className="container">
                    <div className="meet-our-team text-center" data-aos="fade-up">
                        <h1 className="text-dark mb-4">Meet our team</h1>
                        <h2 className="text-secondary mb-4">Meet the passionate individuals behind iTech Homes
                            and <br/> Properties, dedicated to making your homeownership
                            journey <br/> seamless and enjoyable.</h2>
                    </div>
                    <div className="team-heads d-flex justify-content-center align-items-center gap-4 mt-4" data-aos="fade-up">
                        <img src={managingDirector} alt="Director" className="img-fluid" data-aos="fade-up" />
                        <img src={managingPartner} alt="Partner" className="img-fluid" data-aos="fade-up" />
                        <img src={chiefOperationsOfficer} alt="COO" className="img-fluid" data-aos="fade-up" />
                    </div>
                    <div className="rest-of-the-team mt-4" data-aos="fade-up">
                        <img src={theRemainingTeam} alt="Others" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="our-exclusive-estates-container py-5 mt-5 container" data-aos="fade-up">
                <h1 className="text-center mb-3">Our exclusive estates</h1>
                <h2 className="text-center mb-5">Explore unparalleled investment opportunities that redefine the <br/> standards of innovation and quality in the world of real estate.</h2>
                <div className="estates d-flex justify-content-center align-items-center gap-4" data-aos="fade-up">
                    <img src={ileri} alt="Ileri" className="img-fluid" />
                    <img src={grandeEstate} alt="Grande Estate" className="img-fluid" />
                </div>
            </div>

            <div className="comment-section py-5 bg-light mt-5" data-aos="fade-up">
                <div className="container">
                    <div className="post d-flex justify-content-center align-items-center" data-aos="fade-up">
                        <img src={user} alt="User" className="img-fluid me-3" />
                        <img src={comment} alt="Comment" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="our-impact-container py-5 mt-5 container" data-aos="fade-up">
                <h1 className="text-center mb-3">Our Impact by the Numbers</h1>
                <h2 className="text-center mb-5">Join the growing community of investors who have experienced the iTech <br/> difference. Your success is our metric of achievement.</h2>
                <img src={stats} alt="Stats" className="img-fluid" />
            </div>

            <div className="protect-container py-5 mt-5" data-aos="fade-up">
                <div className="container">
                    <img src={protect} alt="PROtect" className="img-fluid" />
                </div>
            </div>

            <div className="contact-us-container py-5 bg-light mt-5" data-aos="fade-up">
                <div className="container">
                    <div className="contact-info">
                        <h2 className="text-center text-danger mb-4">Contact us</h2>
                        <h1 className="text-center mb-3">Get in touch</h1>
                        <h3 className="text-center mb-4">Our friendly team is always here to chat.</h3>
                    </div>
                    <div className="contacts d-flex justify-content-center align-items-center" data-aos="fade-up">
                        <img src={email} alt="Email" className="me-4"/>
                        <img src={office} alt="Ofice" className="me-4"/>
                        <img src={phone} alt="Phone" className="me-4"/>
                    </div>
                </div>
            </div>

            <footer className="footer py-5 mt-5" data-aos="fade-up">
                <div className="container">
                    <img src={iTechLogo} alt="iTech Logo" className="footer-logo w-32 mb-4"/>
                    <div className="first-footer-section d-flex mb-4" data-aos="fade-up">
                        <a href="#our-projects" className="footer-link me-2">Our Projects</a>
                        <a href="#schedule-inspection" className="footer-link me-2">Schedule Inspection</a>
                        <a href="#careers" className="footer-link me-2">Careers</a>
                        <a href="#help" className="footer-link me-2">Help</a>
                        <a href="#privacy" className="footer-link me-2">Privacy</a>
                    </div>
                    <div className="second-footer-section d-flex justify-content-between align-items-center border-top border-gray-300 pt-4">
                        <h3>© 2024 iTech Homes and Properties. All rights reserved.</h3>
                        <div className="second-footer-section-links d-flex gap-2">
                            <a href="#terms" className="footer-link me-2">Terms</a>
                            <a href="#privacy" className="footer-link me-2">Privacy</a>
                            <a href="#cookies" className="footer-link me-2">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
