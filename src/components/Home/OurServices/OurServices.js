import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teeth from '../../../images/tooth.png';
import CardService from '../CardService/CardService';

const OurServices = () => {
        const serviceData  =[
            {title: 'Fluoride Treatment', img:Fluoride},
            {title: 'Cavity Filling', img:Cavity},
            {title: 'Teeth Whitening', img:Teeth}
        ]
    return (
        <section style={{margin: '150px 0px 100px'}}>
            <div  className="text-center">
                <h4 className="my-text">Our Services</h4>
                <h1 className='pt-2 pb-5'>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
            <div className="container row gy-3 ">
            {
                serviceData.map(service => <CardService service={service}></CardService>)
            }
            </div>
        </div>
        </section>
    );
};

export default OurServices;