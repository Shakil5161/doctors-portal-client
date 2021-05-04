import React from 'react';

const PatientCard = ({ data }) => {
    return (
        <div class="col-md-4 g-2">
            <div className="col-md-11 border-0 card shadow p-3 mb-5 bg-body rounded ">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae reprehenderit earum placeat tempore iure ullam molestiae, aliquam facere cumque obcaecati incidunt nulla minus vitae maxime!</p>
                <div className="d-flex">
                    <img height='60px' className="me-3" src={data.img} alt="" srcset="" />
                    <div>
                        <h6>{data.name}</h6>
                        <p>{data.city}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
};

export default PatientCard;