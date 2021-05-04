import React from 'react';
import FeaturedImg from '../../../images/FeaturedImg.png'
const FeaturedService = () => {
    return (
        <div className="container p-3" >
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4" >
                        <img className="img-fluid"  src={FeaturedImg} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Exceptional Dental <br/> Care, on Your Terms</h1>
                            <p className="card-text text-secondary pt-3 pb-5 pe-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem omnis, recusandae magnam dolor harum quidem iste eligendi mollitia, molestiae maxime sint! Cumque facilis quo hic blanditiis, iure ducimus vero est numquam illum illo dolorem minima et at quaerat, doloremque corrupti sapiente doloribus pariatur aspernatur rerum eaque. Repudiandae blanditiis, vel amet natus odio dolorem odit ipsa nesciunt exercitationem, excepturi laborum culpa alias totam expedita sit. Officia earum accusantium odio expedita recusandae voluptatibus </p>
                            <button className="btn btn-primary border-0">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;