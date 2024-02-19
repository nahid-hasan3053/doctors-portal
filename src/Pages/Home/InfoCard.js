import React from 'react';

const InfoCard = ({info}) => {

    const {title, description, icon, bgClass} = info

    return (
        <div className={`card card-side shadow-xl ${bgClass} px-4 text-white`}>
            <figure><img src={icon} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;