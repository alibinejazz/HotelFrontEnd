import HotelTables from './components/HotelTables';
import DetailPage from './components/DetailPage';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Confirmed from './components/Confirmed';


function App() {

  const table = [
    {
        sno : 1,
        Name : "Hotel Faran",
        ShortDescription: "Good hotel",
        LongDescription: "Located at sharah e faisal with a good atmosphere",
        imageLink: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/243128580.jpg?k=608c1640d763c1cb7dd74d6f937c5cbc74cf7feaf020d1c18177a5da3a0c39a1&o=&hp=1",
        Location: "Karachi",
        Experience: "Budget",
        Pool: "No",
        Price: "25000"
    },
    {
        sno : 2,
        Name : "Hotel Galaxy",
        ShortDescription: "Good hotel",
        LongDescription: "Located at Baloch pull with a good atmosphere",
        imageLink: "https://media-cdn.tripadvisor.com/media/photo-s/1b/1a/96/15/hotel-galaxy.jpg",
        Location: "North Khi",
        Experience: "Low Budget",
        Pool: "No",
        Price: "20000"
    },
    {
        sno : 3,
        Name : "Hotel Star",
        ShortDescription: "Avg hotel",
        LongDescription: "Located at Saddar with a good atmosphere",
        imageLink: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213517278.jpg?k=f40e3f6d52f75978a5083817e9358cf7b8f855ccbeb2aa908c1901431c449894&o=&hp=1",
        Location: "East Khi",
        Experience: "Cheap Budget",
        Pool: "Yes",
        Price: "7000"
    },
    {
        sno: 4,
        Name: "Hotel ABC",
        ShortDescription: "Comfortable hotel",
        LongDescription: "Located in a prime location with modern amenities",
        imageLink: "https://example.com/hotel-abc.jpg",
        Location: "City XYZ",
        Experience: "Mid-range",
        Pool: "No",
        Price: "15000"
      },
      {
        sno: 5,
        Name: "Hotel XYZ",
        ShortDescription: "Luxury hotel",
        LongDescription: "Located at a scenic spot with breathtaking views",
        imageLink: "https://example.com/hotel-xyz.jpg",
        Location: "City ABC",
        Experience: "Luxury",
        Pool: "Yes",
        Price: "50000"
      },
      {
        sno: 6,
        Name: "Hotel Comfort",
        ShortDescription: "Cozy hotel",
        LongDescription: "Nested amidst nature with a warm ambiance",
        imageLink: "https://example.com/hotel-comfort.jpg",
        Location: "Mountain Town",
        Experience: "Mid-range",
        Pool: "Yes",
        Price: "18000"
      },
      {
        sno: 7,
        Name: "Hotel Serene",
        ShortDescription: "Peaceful hotel",
        LongDescription: "Surrounded by tranquil landscapes for a calming stay",
        imageLink: "https://example.com/hotel-serene.jpg",
        Location: "Beach City",
        Experience: "Budget",
        Pool: "No",
        Price: "12000"
      },
      {
        sno: 8,
        Name: "Hotel Sunrise",
        ShortDescription: "Stunning hotel",
        LongDescription: "Offers breathtaking views of the sunrise over the mountains",
        imageLink: "https://example.com/hotel-sunrise.jpg",
        Location: "Hilltop Village",
        Experience: "Luxury",
        Pool: "Yes",
        Price: "40000"
      },
      {
        sno: 9,
        Name: "Hotel Plaza",
        ShortDescription: "Modern hotel",
        LongDescription: "Located in the heart of the city with contemporary amenities",
        imageLink: "https://example.com/hotel-plaza.jpg",
        Location: "City Center",
        Experience: "Mid-range",
        Pool: "Yes",
        Price: "22000"
      },
      {
        sno: 10,
        Name: "Hotel Paradise",
        ShortDescription: "Exquisite hotel",
        LongDescription: "Offers a luxurious retreat with top-notch facilities",
        imageLink: "https://example.com/hotel-paradise.jpg",
        Location: "Tropical Island",
        Experience: "Luxury",
        Pool: "Yes",
        Price: "60000"
      },
      {
        sno: 11,
        Name: "Hotel Royal",
        ShortDescription: "Elegant hotel",
        LongDescription: "Indulge in a regal experience with impeccable service",
        imageLink: "https://example.com/hotel-royal.jpg",
        Location: "City Center",
        Experience: "Luxury",
        Pool: "Yes",
        Price: "45000"
      },
      {
        sno: 12,
        Name: "Hotel Oasis",
        ShortDescription: "Tranquil hotel",
        LongDescription: "Escape to a peaceful oasis amidst lush greenery",
        imageLink: "https://example.com/hotel-oasis.jpg",
        Location: "Desert Town",
        Experience: "Budget",
        Pool: "No",
        Price: "10000"
      },
      {
        sno: 13,
        Name: "Hotel Majestic",
        ShortDescription: "Grand hotel",
        LongDescription: "A grand and opulent experience with exquisite architecture",
        imageLink: "https://example.com/hotel-majestic.jpg",
        Location: "City Center",
        Experience: "Luxury",
        Pool: "Yes",
        Price: "55000"
      },
      {
        sno: 14,
        Name: "Hotel Tranquility",
        ShortDescription: "Serene hotel",
        LongDescription: "A serene retreat offering a perfect blend of comfort and nature",
        imageLink: "https://example.com/hotel-tranquility.jpg",
        Location: "Countryside",
        Experience: "Mid-range",
        Pool: "Yes",
        Price: "25000"
      },
      {
        sno: 15,
        Name: "Hotel Cozy Inn",
        ShortDescription: "Homely hotel",
        LongDescription: "Experience a warm and cozy stay away from home",
        imageLink: "https://example.com/hotel-cozy-inn.jpg",
        Location: "Quaint Village",
        Experience: "Budget",
        Pool: "No",
        Price: "8000"
      }
]
  return (
    <>
    <Router> 
      <Routes>
    <Route path="/" element={<HotelTables data = {table}/>}/>
    <Route path="/detailPage/:id" element={<DetailPage detail={table} />}/>
    <Route path='/bookingForm' element={<BookingForm data={table}/>}/>
    <Route path='confirmedBooking' element={<Confirmed/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
