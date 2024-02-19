import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const serviceData = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-primary font-bold text-xl'>OUR SERVICES</h1>
                <p className='text-3xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-14 gap-4'>
                {
                    serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;