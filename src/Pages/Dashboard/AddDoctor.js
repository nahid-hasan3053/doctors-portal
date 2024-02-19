import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const navigate = useNavigate()

    const {data:specialities=[], isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async()=>{
            const res = await fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/speciality') 
            const data = res.json();
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const handleAddDoctor = data =>{
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            console.log(imgData.data.url);
            const doctor = {
                name: data.name,
                email: data.email,
                speciality: data.speciality,
                image: imgData.data.url
            }
            console.log(doctor);

            fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/doctors',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessnToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success(`${data.name} inserted successfully`)
                navigate('/dashboard/managedoctor')
            })
        })
    }

    return (
        <div>
            <h1 className='text-3xl ms-6'>Add a doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='md:w-1/3 m-5 grid grid-cols-1 gap-2 shadow-xl p-5'>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Name</span></div>
                    <input {...register('name', {required: 'Name is required'})} type="Enter your name" placeholder="Type here" className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.name.message}</p>}
                </label>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Email</span></div>
                    <input {...register('email', {required: 'Email is required'})} type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.email.message}</p>} 
                </label>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Speciality</span></div>
                    <select {...register('speciality')} className="select select-bordered w-full max-w-xs">
                        {
                            specialities.map(speciality => <option key={speciality._id}>{speciality.name}</option>)
                        }
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Photo</span></div>
                    <input {...register('img', {required: 'Image is required'})} type="file" className="input input-bordered w-full" />
                    {errors.img && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.img.message}</p>}
                </label>
                <button className='btn btn-primary text-white'>ADD DOCTOR</button>
            </form>
        </div>
    );
};

export default AddDoctor;