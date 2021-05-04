import React from 'react';
import Quote from '../../../images/quote.png';
import Ema from '../../../images/ema.png';
import Jack from '../../../images/jack.png';
import Winson from '../../../images/winson.png';
import PatientCard from '../PatientCard/PatientCard'
const Testimonial = () => {
    const patientData = [
        {name: 'Ema Watson', img: Ema, city: 'London'},
        {name: 'MC Jack', img: Jack, city: 'Paris'},
        {name: 'Will Winson', img: Winson, city: 'New York'}
    ]
    return (
        <section className="container">
            <div className="testimonial-header d-flex justify-content-between">
                <div className="col-md-8 text-start">
                    <h4 className="my-text">Testimonial</h4>
                    <h1>What is our patients <br />Says</h1>
                </div>
                <div className="col-md-4 text-end">
                    <img height="150px" src={Quote} alt="" srcset=""/>
                </div>
            </div>
            <div className="row" style={{margin:'100px 0px'}}>
                {
                    patientData.map(data => <PatientCard data={data}></PatientCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;