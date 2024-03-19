import React, { useState } from 'react';
import { ReactComponent as CompanyLogo } from '../../assets/images/iTechLogo.svg';
import '../styles/Sidebar.css';

const Sidebar = ({ setActivePage }) => {
    const [activeNav, setActiveNav] = useState('');

    const handleNavClick = (nav) => {
        setActiveNav(nav);
        setActivePage(nav);
    };

    return (
        <div className="d-flex flex-column sidebar">
            <div className="p-3">
                <CompanyLogo />
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={() => setActivePage('dashboard')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{marginRight: '5px', marginLeft: '3px', verticalAlign: 'middle'}}>
                            <path
                                d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0ZM2 8H6V2H2V8ZM12 16H16V10H12V16ZM12 4H16V2H12V4ZM2 16H6V14H2V16Z"/>
                        </svg>
                        Dashboard
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={() => setActivePage('dashboard')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{marginRight: '7px', verticalAlign: 'middle'}}>
                            <path
                                d="M3 5.5C3 4.30653 3.47411 3.16193 4.31802 2.31802C5.16193 1.47411 6.30653 1 7.5 1H21V23H16V21H19V16H16.5V14H19V3H7.5C6.83696 3 6.20107 3.26339 5.73223 3.73223C5.26339 4.20107 5 4.83696 5 5.5V14.758C5.7395 14.2625 6.60986 13.9986 7.5 14H9.5V16H7.5C6.83696 16 6.20107 16.2634 5.73223 16.7322C5.26339 17.2011 5 17.837 5 18.5C5 19.163 5.26339 19.7989 5.73223 20.2678C6.20107 20.7366 6.83696 21 7.5 21H10V23H7.5C6.30653 23 5.16193 22.5259 4.31802 21.682C3.47411 20.8381 3 19.6935 3 18.5V5.5ZM8 5H10.004V7.004H8V5ZM8 8H10.004V10.004H8V8ZM13 14.615L16.914 18.365L15.53 19.809L14 18.343V23H12V18.343L10.47 19.809L9.086 18.364L13 14.615Z"/>
                        </svg>
                        Document Repository
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
