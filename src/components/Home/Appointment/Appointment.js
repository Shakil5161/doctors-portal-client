import React from 'react';
import './Appointment.css';
import Doctor from '../../../images/Doctor.png';
const Appointment = () => {
    return (
        <div className="Container-fluid ">
            <div className="appointment ">
                <div className="overlay ">
                    <div className="appointment-content row m-0 d-flex">
                        <div className="col-md-5">
                            <img className="img-fluid" src={Doctor} alt="" />
                        </div>
                        <div className="col-md-7 text-start appointment-text">
                            <h4 className="my-text">Appointment</h4>
                            <h1>Make an appointment <br /> today</h1>
                            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt ut consequatur reprehenderit. Quia, cupiditate!</p>
                            <button className="btn btn-primary border-0">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;