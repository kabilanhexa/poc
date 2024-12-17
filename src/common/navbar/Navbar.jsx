import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Navbar.scss';
import FleetcorLogo from '../../assets/images/corpay.png';
import Home from '../../assets/images/icon-home.svg';
import Authorization from '../../assets/images/icon-authorizations.svg';
import Customer from '../../assets/images/icon-customers.svg';
import Reporting from '../../assets/images/icon-reporting.svg';
import Merchant from '../../assets/images/icon-merchant.svg';
import Sales from '../../assets/images/icon-sales.svg'
import Pricing from '../../assets/images/icon-pricing.svg';

const Navbar = () => {   
    return (
        <div id="navbar">
            <Sidebar>
                <div className="brand">
                    <img src={FleetcorLogo} alt="Logo" />
                    <span className='logo-txt'>MasterData UI</span>
                </div>
                <div className="login">

                    <span className="login-initial">
                        J
                    </span>
                    <span className="loginText">
                        <i className='bx bxs-user'></i> 
                       johndemo@gmail.ocom
                    </span>
                    <span className="profileRole">
                        Product Owner
                    </span>
                </div>
                <Menu>
                    <MenuItem component={<Link to="/dashboard" />} icon={<img src={Home} />}> Home </MenuItem>
                    <SubMenu icon={<img src={Customer} />} label="Customers" >
                        <MenuItem> Set-Up & Maintenance </MenuItem>
                        <MenuItem> Contract / Pricing & Fees </MenuItem>
                        <MenuItem> Reporting </MenuItem>
                        <MenuItem> Hotel Directory </MenuItem>
                        <MenuItem> Employees & Check In Cards </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<img src={Authorization} />} label="Reservations" >
                        <MenuItem component={<Link to="/reservations" />}> Reservation Requests</MenuItem>
                        <MenuItem> Fulfillment & Hotel Faxes </MenuItem>
                        <MenuItem> Ghost Cards </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<img src={Pricing} />} label="Settlements" >
                        <MenuItem> Credit Card </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<img src={Reporting} />} label="Reporting" >
                        <MenuItem> Invoicing</MenuItem>
                        <MenuItem> Dashboard </MenuItem>
                        <MenuItem> Savings & Bad Boy </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<img src={Merchant} />} label="Merchants" >
                        <MenuItem> Set-Up & Maintenance </MenuItem>
                        <MenuItem> Contract Setup / Services </MenuItem>
                        <MenuItem> Room Gurantees </MenuItem>
                        <MenuItem> Program Enrollment (QP,ELA, MCES) </MenuItem>
                        <MenuItem> Payments / Gurantees </MenuItem>
                        <MenuItem> Reimbursement </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<img src={Authorization} />} label="Transactions" >
                        <MenuItem> Digital Imaging entry Queue </MenuItem>
                        <MenuItem> Validation / Exception </MenuItem>
                        <MenuItem> Pricing </MenuItem>
                        <MenuItem> Posting </MenuItem>
                        <MenuItem> Disputes </MenuItem>
                        <MenuItem> Reconcillation </MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to="/" />}> Logout </MenuItem>
                </Menu>         
            </Sidebar>

        </div>
    )
}

export default Navbar;