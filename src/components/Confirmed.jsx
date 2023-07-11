import React from 'react'
import './Confirmed.css';
import { useNavigate } from 'react-router-dom';

const Confirmed = () => {

    const Nav = useNavigate();
    function toMainPage(){
        Nav('/')
    }
  return (
    <div>
    <div className='confirmed-booking'>
        <h1>Your Booking Has Been Confirmed</h1>
      <img src="https://image.isu.pub/230111141030-0018295c8f5ccb2696390d5e1cf18bc9/jpg/page_1.jpg" alt="Confirmed" width={600} />
    </div>
    <>
    <button onClick={toMainPage}>Start Over</button>
    </>
    </div>
  )
}

export default Confirmed
