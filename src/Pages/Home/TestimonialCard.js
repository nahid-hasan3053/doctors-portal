import React from 'react';

const TestimonialCard = ({testimonial}) => {

    const {comment, name, city, image} = testimonial

    return (
    <div className="card shadow-xl">
        <div className="card-body">
            <p className='text-justify'>{comment}</p>
            <div className="card-actions justify-start items-center mt-2">
            <div className="avatar">
                <div className="w-16 me-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='' src={image} />
                </div>
            </div>
                <div>
                    <p className='font-bold'>{name}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TestimonialCard;