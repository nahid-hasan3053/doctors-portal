import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { format } from 'date-fns';

const BookingModal = ({treatment, selectedDate, setTreatment, refetch}) => {

    const {name:treatmentName, slots} = treatment
    const {user} = useContext(AuthContext)

    const date = format(selectedDate, 'PP')

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        
        const booking = {
            appointmentDate: date,
            treatmentName,
            patientName: name,
            slot,
            phone,
            email
        }
        fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/bookings', {
            method : 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setTreatment(null)
                toast.success('Your booking is confirmed!')
                refetch();
            }
            else{
                toast.error(data.message)
            }
        })
        
        console.log(booking);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>
                        <input type="text" value={selectedDate} disabled className="input input-bordered w-full font-semibold" />
                        <label className="form-control w-full">
                            <select name='slot' className="select select-bordered">
                                {
                                    slots.map(slot => <option>{slot}</option>)
                                }
                            </select>
                        </label>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Enter Your Email" className="input input-bordered w-full font-bold" />
                        <button className='btn btn-accent w-full text-white'>Submit</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;