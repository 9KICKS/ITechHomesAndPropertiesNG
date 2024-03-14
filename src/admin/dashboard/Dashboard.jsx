import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Welcome, ADMIN</h1>
                <p>Follow up with activities of your customers and agents!</p>
                <div className="dashboard-stats">
                    <div className="stat-item">
                        Number of Properties for Sale <span>505</span>
                    </div>
                    <div className="stat-item">
                        Total Revenue <span>₦175,060,000</span>
                    </div>
                    <div className="stat-item">
                        Total Clients <span>187</span>
                    </div>
                    <div className="stat-item">
                        Total Agents <span>85</span>
                    </div>
                </div>
            </header>
            <section className="users-list">
                <h2>Users List</h2>
                <div className="user-categories">
                    <button>All Users (272)</button>
                    <button>Clients (187)</button>
                    <button>Agents (85)</button>
                </div>
                <input type="search" placeholder="Search name" />
                {/* User items would be mapped here from a data source */}
                <div className="user-item">
                    <div className="user-info">
                        <img src="profile_pic_url" alt="User" />
                        <span>Alice Modupe</span>
                    </div>
                    <button>View Profile</button>
                </div>
                {/* ...other users */}
                <button className="see-all">See all</button>
            </section>
        </div>
    );
}

export default Dashboard;
