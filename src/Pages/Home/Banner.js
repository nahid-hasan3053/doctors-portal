import React from 'react';
import banner from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
    <div className="hero" style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
    }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt='' src={banner} className="rounded-lg shadow-2xl md:w-1/2" />
            <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;