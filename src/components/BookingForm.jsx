import React,{useState} from 'react'

const BookingForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState();
    const [dates, setDates] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
  <label htmlFor="pname">Name:</label><br/>
  <input type="text" id="fname" name="fname" value={name} onChange={e => setName(e.target.value)} required/><br/>
  <label htmlFor="lname">Address:</label><br/>
  <input type="text" id="lname" name="lname" value={address} onChange={e => setAddress(e.target.value)} required/><br/>
  <label htmlFor="email">Email Address</label> <br/>
  <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/><br/>
  <label htmlFor="dates">Dates : </label> <br/>
  <input type="text" id="dates" name="shortdes"value={dates} onChange={e => setDates(e.target.value)} required/><br/>
  <button type='submit'>Add your product </button>
</form>
  )
}

export default BookingForm
