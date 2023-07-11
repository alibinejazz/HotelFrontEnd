import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const Nav = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchHotelData();
  });

  const fetchHotelData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/hotels/add/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log('Error fetching hotel data:', error);
    }
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  function returnResults() {
    Nav('/');
  }

  function bookForm(id) {
    Nav(`/bookingForm/${id}`);
  }

  const poolValue = item.pool ? 'Yes' : 'No';

  return (
    <div>
      <div className='detail-show'>
        <div><img src={item.imageLink} alt="largepic" width={300} /></div>
        <h2>{item.Name}</h2>
        <p>Description: {item.longDescription}</p>
        <p>City: {item.location}</p>
        <p>Experience: {item.experience}</p>
        <p>Have pool or not: {poolValue}</p>
        <button onClick={()=> bookForm(item.id)}>Book Now</button>
      </div>
      <div>
        <button onClick={returnResults}>Return to results</button>
      </div>
    </div>
  );
};

export default DetailPage;
