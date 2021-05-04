import React, { useEffect, useState } from 'react';
import AllPatientTable from '../AllPatientTable/AllPatientTable';
import Sidebar from '../Sidebar/Sidebar';
// import Sidebar from '../Sidebar/Sidebar';

const AllPatients = () => {
    const [allPatients, setAllPatients] =  useState([])
    useEffect(() => {
        fetch('https://boiling-ravine-47755.herokuapp.com/allPatients')
        .then(res => res.json())
        .then(data => setAllPatients(data))
    },[])
    console.log(allPatients)
    return (
       <section>
           <div className="container-fluid row">
               <div className="col-md-2">
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-10">
                    <AllPatientTable key={allPatients._id} allPatients={allPatients}></AllPatientTable>
               </div>
           </div>
       </section>
    );
};

export default AllPatients;