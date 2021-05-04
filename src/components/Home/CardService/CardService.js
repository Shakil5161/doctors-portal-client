import React from 'react';

const CardService = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height: '50px'}} src={service.img} alt="" srcset=""/>
            <h5 className='pt-3 pb-3'>{service.title}</h5>
            <p  className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas iste, iure necessitatibus itaque illum?</p>
        </div>
    );
};

export default CardService;