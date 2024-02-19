import React from 'react'
import care from '../../assets/images/treatment.png'

const Care = () =>{
    return (
    <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row">
            <img alt='' src={care} className="md:w-4/12 rounded-lg shadow-2xl" />
            <div className='md:w-1/2 md:ms-10'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    )
}

export default Care