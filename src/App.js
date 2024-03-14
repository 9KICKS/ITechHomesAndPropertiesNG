import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage";
import ClientLoginPage from "./components/ClientLoginPage";
import ForgotPassword from "./components/ForgotPassword";
import OTPPage from "./components/OTPPage";
import Dashboard from "./admin/dashboard/Dashboard";
import Sidebar from "./admin/dashboard/Sidebar";
import {useState} from "react";

function App() {
    const [activePage, setActivePage] = useState('');

    return (
        <div className="App">
            <Sidebar setActivePage={setActivePage} />
            <div className="content">
                {activePage === 'dashboard' && <Dashboard />}
            </div>
        </div>
    );
}

export default App;
