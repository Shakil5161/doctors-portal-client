import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
const DoctorCard = (props) => {
    const { name, image, email } = props.data;
    return (
        <div className="col-sm-4">
            <div class="card col-sm-11 border-0 " >
                {/* <img height="350px" src={img} class="card-img-top" alt="..." /> */}
                <img height="350px" src={`data:image/png;base64,${image.img}`}/>
                <div class="card-body text-center">
                    <h5 class="card-title">{name}</h5>
                    <FontAwesomeIcon className="my-text" icon={faEnvelope} />
                    <span class="card-text text-secondary">{email}</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;