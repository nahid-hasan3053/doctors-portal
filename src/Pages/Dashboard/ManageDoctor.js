import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from '../SharedPages/ConfirmationModal';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const closeModal = () =>{
        setDeleteDoctor(null)
    }

    const handleDoctorDelete = doctor =>{
        console.log(doctor);
        fetch(`https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                refetch();
                toast.success('Doctors removed successfully')
            }
        })
    }

    const {data:doctors=[], refetch, isLoading} = useQuery({
        queryKey: ['doctors'],
        queryFn: async() =>{
            try{
                const res = await fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/doctors',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json()
                return data;
            }
            catch(error){

            }
        }
    })
    
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete = id =>{
        

    }

    return (
        <div>
            <h1 className='text-3xl m-2'>Manage doctors: {doctors.length}</h1>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Speciality</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    doctors.map(doctor => <tr key={doctor._id}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{doctor.name}</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {doctor.speciality}
                        </td>
                        <td>{doctor.email}</td>
                        <th>
                            <label onClick={()=>setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-xs text-white">Delete</label>
                        </th>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
            {
                deleteDoctor && 
                <ConfirmationModal 
                    title={`You are deleting ${deleteDoctor.name}`}
                    message={`Your cannot get the data back be careful ${deleteDoctor.email}`}
                    closeModal={closeModal}
                    deleteAction={handleDoctorDelete}
                    modalData={deleteDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctor;