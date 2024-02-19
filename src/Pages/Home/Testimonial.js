import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const testimonialData = [
        {
            _id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            image: people1
        },
        {
            _id: 2,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            image: people2
        },
        {
            _id: 3,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            image: people3
        }
    ]

    return (
        <div className='mt-32'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl font-bold text-primary'>Testimonial</h1>
                    <p className='text-2xl'>What Our Patients Says</p>
                </div>
                <div className='w-2/12'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-14'>
                {
                    testimonialData.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;