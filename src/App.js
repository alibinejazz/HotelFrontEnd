import HotelTables from './components/HotelTables';
import DetailPage from './components/DetailPage';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Confirmed from './components/Confirmed';


function App() {

  return (
    <>
    <Router> 
      <Routes>
    <Route path="/" element={<HotelTables/>}/>
    <Route path="/detailPage/:id" element={<DetailPage/>}/>
    <Route path='/bookingForm/:id' element={<BookingForm />}/>
    <Route path='confirmedBooking' element={<Confirmed/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
