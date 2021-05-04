import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardInfo.css'

const CardInfo = ({ info }) => {
    console.log(info)
    return (
        <div  className='col-md-4 text-white'>
            <div style={{borderRadius: '5px'}} className={`d-flex justify-content-center p-3 info-${info.color}`}>
                <div className='info-icon me-3'>
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.info}</small>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;