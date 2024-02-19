import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const from = location.state?.from?.pathname || '/'
    if(token){
        navigate(from, {replace: true})
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data =>{
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
        })
        .catch(error => setLoginError(error.message))
    }


    return (
        <div>
            <div className='flex items-center justify-center mt-6'>
                <h1 className='text-3xl'>Login</h1>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className='md:w-1/3 mx-auto grid grid-cols-1 gap-2 shadow-xl p-5 m-3'>
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-bold">Email</span></div>
                    <input {...register('email', {required: 'Email is required'})} type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.email.message}</p>} 
                </label>
                <label className="form-control w-full ">
                    <div className="label"><span className="label-text font-bold">Password</span></div>
                    <input {...register('password', {required: 'Password is required'})} type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600 ms-1 mt-1 text-xs'>{errors.password.message}</p>}
                </label>
                <Link className='ms-1 hover:underline text-xs'>Forgot Password?</Link>
                <button className='btn btn-primary text-white'>LOGIN</button>
                {loginError && <p className='text-red-600 ms-1 mt-1 text-xs'>{loginError}</p>}
                <p className='text-xs text-center'>New to doctors portal? <Link className='text-primary hover:underline' to='/register'>Register here</Link></p>
                <div className="divider divider-accent">OR</div>
                <button className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;