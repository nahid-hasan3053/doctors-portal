import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Register = () => {

    const {createUser, updateUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)

    if(token){
        navigate('/')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = data =>{
        setRegisterError(' ')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            const userInfo = {
                displayName : data.firstName
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.firstName, data.email)
                toast.success('User created successfully')
            })
            console.log(user);
        })
        .catch(error => setRegisterError(error.message))
    }

    const saveUser = (firstName, email) =>{
        const user = {firstName, email}
        fetch('https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setUserEmail(email)
        })
    }

    // const getUserToken = email =>{
    //     fetch(`https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken)
    //             navigate('/')
    //             console.log(data.accessToken);
    //         }
    //     })
    // }

    return (
        <div>
            <div className='flex items-center justify-center mt-4'>
                <h1 className='text-3xl'>Register</h1>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className='md:w-1/3 mx-auto grid grid-cols-1 gap-2 shadow-xl p-5 m-3'>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Name</span></div>
                    <input {...register('firstName', {required: 'Name is required'})} type="Enter your name" placeholder="Type here" className="input input-bordered w-full" />
                    {errors.firstName && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.firstName.message}</p>}
                </label>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Email</span></div>
                    <input {...register('email', {required: 'Email is required'})} type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.email.message}</p>} 
                </label>
                <label className="form-control w-full ">
                    <div className="label"><span className="label-text font-bold">Password</span></div>
                    <input 
                    {...register('password', 
                    {required: 'Password is required',
                     minLength: {value: 6, message: 'Password length must be 6 character'},
                     pattern: {value: /^(?=.*[A-Z])(?=.*[!@#$&*]).{6}/, message: 'Create strong password with special character'}
                    })} type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.password.message}</p>}
                </label>
                {registerError && <p className='text-red-600 ms-1 mt-1 text-xs'>{registerError}</p>}
                <button className='btn btn-primary text-white'>REGISTER</button>
                <p className='text-xs text-center'>Already have an account? <Link className='text-primary hover:underline' to='/login'>Login here</Link></p>
                <div className="divider divider-accent">OR</div>
                <button className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Register;