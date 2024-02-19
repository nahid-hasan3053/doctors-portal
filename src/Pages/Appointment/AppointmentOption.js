import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {

    const {name, slots} = option

    return (
    <div className="card shadow-xl">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{slots[0]}</p>
            <p>{slots.length} available {slots.length > 1? 'slots' : 'slot'}</p>
            <div className="card-actions justify-end">
                <label onClick={()=>setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
            </div>
        </div>
    </div>
    );
};

export default AppointmentOption;