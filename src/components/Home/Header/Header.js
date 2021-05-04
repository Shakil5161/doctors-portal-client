import React from 'react';
import BookingInfo from '../BookingInfo/BookingInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BookingInfo></BookingInfo>
        </div>
    );
};

export default Header;