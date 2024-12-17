import React from 'react';
import DashboardLogo from '../../assets/images/dashboard.jpg';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="home">Home</div>
                <div className="welcome">Welcome To CLC Lodging - Talon!</div>
                <div className="desc">
                    To get started, navigate to a section on the left menu to find what you are looking for.
                </div>
                <img className="imgdashboard" src={DashboardLogo} alt="dashboard" />
            </div> 

        </>
    )
}

export default Dashboard;