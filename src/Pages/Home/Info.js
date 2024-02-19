import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    const infoData = [
        {
            _id: 1,
            title: 'Opening hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            _id: 2,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            _id: 3,
            title: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20'>
            {
                infoData.map(info => <InfoCard key={info._id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default Info;