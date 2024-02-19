import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({selectedDate}) => {

    // const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const {data:appointments=[], refetch} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: ()=> fetch(`https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    // useEffect(()=>{
    //     fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // },[])

    return (
        <div>
            <p className='text-center mt-6 font-semibold'>You selected: {format (selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    appointments.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
                {
                    treatment && <BookingModal refetch={refetch} selectedDate={selectedDate} setTreatment={setTreatment} treatment={treatment}></BookingModal>
                }
        </div>
    );
};

export default AvailableAppointments;