import React from 'react';

const AllPatientTable = ({ allPatients }) => {
    console.log(allPatients)
    return (
        <div className="p-5" style={{backgroundColor: "#F4FDFB",height: "100%"}}>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Gender</th>
                        <th className="text-secondary" scope="col">Age</th>
                        <th className="text-secondary" scope="col">Weight</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPatients.map((appointment, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.weight}KG</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPatientTable;