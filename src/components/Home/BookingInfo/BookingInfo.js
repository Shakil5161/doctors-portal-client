import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import CardInfo from '../CardInfo/CardInfo';

const BookingInfo = () => {
    const infoData = [
        { title: 'Opening Hour',  info: 'week 7 days 24 hour open', icon: faClock, color: 'primary'},
        { title: 'Location',  info: '84/8 north vashantak dhaka-1206', icon: faMapMarker, color: 'dark'},
        { title: 'Contact',  info: '+8801641969790', icon: faPhone, color: 'primary'}
    ]
    return (
        <section className='d-flex justify-content-center'>
            <div className="container row gy-3 ">
            {
                infoData.map(info => <CardInfo info={info}></CardInfo>)
            }
            </div>
        </section>
    );
};

export default BookingInfo;