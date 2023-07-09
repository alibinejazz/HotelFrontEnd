import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const BookingForm = () => {

    const Nav = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState();
    const [dates, setDates] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    function confirmedBooking(){
        Nav('/confirmedBooking');
    }

    function toMainPage(){
        Nav('/')
    }
  return (
    <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label><br/>
  <input type="text" id="name" name="fname" value={name} onChange={e => setName(e.target.value)} required/><br/>
  <label htmlFor="address">Address:</label><br/>
  <input type="text" id="address" name="lname" value={address} onChange={e => setAddress(e.target.value)} required/><br/>
  <label htmlFor="email">Email Address</label> <br/>
  <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/><br/>
  <label htmlFor="dates">Dates : </label> <br/>
  <input type="date" id="dates" name="shortdes"value={dates} onChange={e => setDates(e.target.value)} required/><br/>
  <button type='submit' onClick={confirmedBooking}>Book my stay</button>
  <button onClick={toMainPage}>Cancel</button>
</form>
  )
}

export default BookingForm
