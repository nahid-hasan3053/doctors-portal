import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data:users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/users')
            const data = res.json()
            return data
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Make admin successfully')
                refetch()
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl m-2'>All users</h1>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => 
                                <tr key={user._id}>
                                    <th>{i+1}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {   user?.role !== 'admin' &&
                                            <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make admin</button>}
                                    </td>
                                    <td>
                                        <button className='btn btn-xs btn-secondary text-white'>Delete</button>
                                    </td>
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

export default AllUsers;