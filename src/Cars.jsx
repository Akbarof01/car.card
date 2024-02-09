import React from 'react';
import CarCard from './CarCard';
import './App.css'

const Cars = ({ cars }) => {
  return (
    <div className='ccard'>
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}

export default Cars;

