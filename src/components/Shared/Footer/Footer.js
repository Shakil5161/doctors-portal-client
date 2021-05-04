import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF,  faGooglePlusG,  faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="container footer-bg">
            <div style={{ paddingTop: '90px' }} className="row">
                <div className="col-md-3">
                    <h5 style={{ color: '#1CC7C1', paddingBottom: '20px' }}>Latest</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check Up</a></li>
                            <li><a href="#">Treatment of personal disease</a></li>
                            <li><a href="#">Tooth Extraction</a></li>
                            <li><a href="#">Check Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#1CC7C1', paddingBottom: '20px' }}>Services</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check Up</a></li>
                            <li><a href="#">Treatment of personal disease</a></li>
                            <li><a href="#">Tooth Extraction</a></li>
                            <li><a href="#">Check Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#1CC7C1', paddingBottom: '20px' }}>Oral Health</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check Up</a></li>
                            <li><a href="#">Treatment of personal disease</a></li>
                            <li><a href="#">Tooth Extraction</a></li>
                            <li><a href="#">Check Up</a></li>
                            <li><a href="#">Check Up</a></li>
                            <li><a href="#">Check Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#1CC7C1', paddingBottom: '20px' }}>Our Address</h5>
                    <div className="footer-link ">
                        <address className="text-secondary">
                                Example.com <br/>
                                    Box 564, Disneyland <br/>
                                        USA
                       </address>
                        <div style={{padding: '30px 0px',color: '#1CC7C1'}} >
                        <span className="footer-icon"><FontAwesomeIcon  className="icon" icon={faFacebook} /></span>
                        <span className="footer-icon"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                        <span className="footer-icon"><FontAwesomeIcon icon={faTwitter} /></span>
                        </div>
                        <div>
                            <span>Call Now</span><br/>
                            <button className="btn btn-primary border-0">+2485014</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-3 text-center">
                <small>Copyright {new Date().getFullYear()} All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;