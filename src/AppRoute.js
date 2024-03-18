import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ClientLoginPage from './components/ClientLoginPage';
import ClientSignUpPage from "./components/ClientSignUpPage";

function AppRoute() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<ClientSignUpPage />} />
                    <Route path="/login" element={<ClientLoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoute;
