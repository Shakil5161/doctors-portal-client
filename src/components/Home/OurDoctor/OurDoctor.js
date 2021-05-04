import React, { useEffect, useState } from 'react';
import Doctor from '../../../images/Doctor.png'
import femaleDoctor from '../../../images/femaleDoctor.png'
import DoctorCard from '../DoctorCard/DoctorCard';
const OurDoctor = () => {
    const [doctorData, setDoctorData] = useState([])
    useEffect(() =>{
        fetch('https://boiling-ravine-47755.herokuapp.com/ourDoctors')
        .then(res => res.json())
        .then(data =>setDoctorData(data))
    },[])
    return (
        <section className="container">
            <div className="text-center" style={{padding:'100px 0px'}} >
                <h4 className="my-text">Our Doctors</h4>
            </div>
            <div className="row text-center" style={{paddingBottom:'100px'}}>
                {
                    doctorData.map(data => <DoctorCard data={data}></DoctorCard>)
                }
            </div>
        </section>
    );
};

export default OurDoctor;