import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mb-4">
            <div class="card text-center border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h5 class="card-title my-text">{booking.subject}</h5>
                    <p class="card-text"><b>{booking.visitingHour}</b></p>
                    <p><small class="text-secondary">{booking.totalSpace}SPACE AVAILABLE</small></p>
                    <button onClick={openModal} class="btn btn-primary border-0">BOOK APPOINMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;