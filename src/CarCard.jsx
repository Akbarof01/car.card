import React from 'react';

const CarCard = ({ car }) => {
  const { image ,  title, start_production } = car;
  const isOld = start_production < 2000;

  return (
    <div className={`car-card ${isOld ? 'old-car' : 'new-car'}`}>
      <img className='car-image' src={image} alt={title} />
      <h2>{title}</h2>
      <p>Start Production: {start_production}</p>
      <p>Status: {isOld ? 'Eski' : 'Yangi'}</p>
    </div>
  );
}

export default CarCard;

