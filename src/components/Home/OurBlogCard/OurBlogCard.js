import React from 'react';

const OurBlogCard = (props) => {
    const { name, title, img, description, date } = props.data
    return (
        <div class="col-md-4 g-2 me-0">
            <div className="col-md-11 border-0 shadow p-3  bg-body rounded ">
                <div class="card-body">
                    <div className="d-flex pt-4">
                        <img height='60px' className="me-3" src={img} alt="" srcset="" />
                        <div>
                            <h6>{name}</h6>
                            <p>{date}</p>
                        </div>
                    </div>
                    <h5 className="pt-4 pb-3">{title}</h5>
                    <p class="card-text text-secondary ">{description}</p>

                </div>
            </div>
        </div>
    );
};

export default OurBlogCard;