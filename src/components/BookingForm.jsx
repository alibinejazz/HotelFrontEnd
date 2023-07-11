import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const Nav = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerNight, setPricePerNight] = useState(0);

  useEffect(() => {
    if (arrivalDate && departureDate) {
      const daysCount = Math.floor(
        (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
      );

      if (new Date(departureDate) < new Date(arrivalDate)) {
        setTotalPrice(0);
      } else {
        fetch(`http://localhost:8080/hotels/add/${id}`)
          .then(response => response.json())
          .then(data => {
            const calculatedPricePerNight = data.price;
            setPricePerNight(calculatedPricePerNight);
            const calculatedPrice = calculatedPricePerNight * daysCount;
            const totalPriceWithTax = calculatedPrice + calculatedPrice * 0.12;
            setTotalPrice(totalPriceWithTax.toFixed(2));
          })
          .catch(error => {
            console.error('Error fetching price:', error);
            // Handle the error gracefully
          });
      }
    }
  }, [arrivalDate, departureDate, id]);

  function handleSubmit(e) {
    e.preventDefault();

    if (new Date(departureDate) < new Date(arrivalDate)) {
      alert('Please select correct dates');
      return;
    }

    const formData = {
      name: name,
      email: email,
      arrivalDate: arrivalDate,
      departureDate: departureDate
    };

    fetch('http://localhost:8081/traveler/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response or perform additional actions
        console.log('Data posted:', data);
        
      })
      .catch(error => {
        console.error('Error posting data:', error);
        // Handle the error gracefully
      });
      Nav('/confirmedBooking');
  }

  function toMainPage() {
    Nav('/');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Enter your details</h1>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="fname"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="address">Address:</label>
      <br />
      <input
        type="text"
        id="address"
        name="lname"
        value={address}
        onChange={e => setAddress(e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email Address</label> <br />
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="arrivalDate">Arrival Date: </label> <br />
      <input
        type="date"
        id="arrivalDate"
        name="arrivalDate"
        value={arrivalDate}
        onChange={e => setArrivalDate(e.target.value)}
        required
      />
      <br />
      <label htmlFor="departureDate">Departure Date: </label> <br />
      <input
        type="date"
        id="departureDate"
        name="departureDate"
        value={departureDate}
        onChange={e => setDepartureDate(e.target.value)}
        required
      />
      <br />
      <label htmlFor="pricePerNight">Price (per night): </label> <br />
      <input
        type="text"
        id="pricePerNight"
        name="pricePerNight"
        value={pricePerNight}
        readOnly
      />
      <br />
      <label htmlFor="totalPrice">Total Price (Tax Inclusive): </label> <br />
      <input
        type="text"
        id="totalPrice"
        name="totalPrice"
        value={totalPrice}
        readOnly
      />
      <br />
      <button type="submit">
        Book my stay
      </button>
      <button onClick={toMainPage}>Cancel</button>
    </form>
  );
};

export default BookingForm;
