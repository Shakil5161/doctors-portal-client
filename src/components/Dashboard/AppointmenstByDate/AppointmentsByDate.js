import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments, selectedDate }) => {
    return (
        <div className="bg-white m-5 p-2">
            <div className="d-flex justify-content-between">
                <h4 className="my-text">Appointment</h4>
                <span className="p-1 text-secondary">date:{selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>

            {

                appointments.length ? <AppointmentShortList appointments={appointments}></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }

        </div>
    );
};

export default AppointmentsByDate;