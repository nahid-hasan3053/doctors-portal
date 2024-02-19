import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';

const MyAppointment = () => {


    const {user} = useContext(AuthContext)

    // const url = `https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/bookings?email=${user?.email}`

    // const {data:bookings, isLoading} = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async() =>{
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization : `bearer ${localStorage.getItem('acessToken')}`
    //             }
    //         })
    //         const data = res.json()
    //         return data
    //     }
    // })
    const url = `https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/bookings?email=${user?.email}`

    const {data : bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl m-2'>My Appointment</h1>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, i) => 
                                <tr key={booking._id}>
                                    <th>{i+1}</th>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatmentName}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;