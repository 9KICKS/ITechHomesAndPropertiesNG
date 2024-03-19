import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ClientLoginPage from './components/ClientLoginPage';
import ClientSignUpPage from "./components/ClientSignUpPage";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ForgotPassword from "./components/ForgotPassword";

function AppRoute() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<ClientSignUpPage />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/login" element={<ClientLoginPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoute;
