import { useState, useEffect } from 'react';
import Cars from './Cars';

const App = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    // JSON faylidan ma'lumotlarni olish
    fetch('cars.json')
      .then(response => response.json())
      .then(data => setCarsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='bodd'>
      <h1>Car List</h1>
      <Cars cars={carsData} />
    </div>
  );
}

export default App;
