import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Care from './Care';
import Doctor from './Doctor';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Doctor></Doctor>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;