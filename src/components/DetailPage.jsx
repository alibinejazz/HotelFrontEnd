import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import { useNavigate } from 'react-router-dom';

const DetailPage = ({ detail }) => {
  const { id } = useParams();
  const Nav = useNavigate();
  // Find the object with the matching ID
  const item = detail.find((item) => item.sno === parseInt(id));

  if (!item) {
    // Handle the case when the item is not found
    return <div>Item not found</div>;
  }

  function returnResults(){
    Nav('/');
  }

  function bookForm(){
    Nav('/bookingForm')
  }

  return (
    <div>
        <div className='detail-show'>
            <div><img src={item.imageLink} alt="largepic" width={300} /></div>
      <h2>{item.Name}</h2>  
      <p>Description: {item.LongDescription}</p>
      <p>City: {item.Location}</p>
      <p>Experience: {item.Experience}</p>
      <p>Have pool or not: {item.Pool}</p>
      <button onClick={bookForm}>Book Now</button>
      
      </div>
      <div>
      <button onClick={returnResults}>Return to results</button>
      </div>
      </div>
  );
};

export default DetailPage;
