import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center m-0" style={{ height: '600px' }}>
            <div className="col-md-4 offset-md-1">
                <h1 className="my-text">Your New Smile <br />Starts Here</h1>
                <p className='text-secondary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea perspiciatis at adipisci blanditiis obcaecati quos nihil iste cupiditate, voluptatibus placeat praesentium. Fugit et, labore accusamus inventore molestiae eius illum.
                </p>
                <Link to="/appointment">
                    <button className="btn btn-primary border-0">
                        GET APPOINMENT
                </button>
                </Link>
            </div>
            <div className="col-md-6 ">
                <img className="img-fluid" src={Chair} alt="" srcset="" />
            </div>
        </main>
    );
};

export default HeaderMain;