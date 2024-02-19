import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import bg from '../../assets/images/appointment.png'

const Doctor = () => {
    return (
        <div className="hero mt-20 text-white" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={doctor} className="w-5/12 -mt-20 rounded-lg hidden md:flex" />
                <div className='md:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;