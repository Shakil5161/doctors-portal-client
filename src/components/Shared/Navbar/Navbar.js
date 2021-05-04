import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                        <Link to="/" className="nav-link active"  aria-current="page">Home</Link>
                            
                        </li>
                        <li className="nav-item me-5">
                            <Link to="/appointment" className="nav-link">Appointment</Link>
                            
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link text-white" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link text-white" href="#">Admin</a>
                        </li>
                        <li className="nav-item me-5">
                            <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;