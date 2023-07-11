import React, { useState, useEffect } from 'react';
import xyz from "./HotelTables.module.css";
import { Link, useNavigate} from 'react-router-dom';

const HotelTables = () => {
  const Nav = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [poolRequired, setPoolRequired] = useState(false);
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:8080/hotels/getall');
      const data = await response.json();
      setSearchResults(data);
      setAllResults(data);
    } catch (error) {
      console.log('Error fetching hotels:', error);
    }
  };

  const handleSearch = () => {
    const filteredTable = allResults.filter((item) => {
      const matchesCity = city === "" || item.location === city;
      const matchesExperience = experienceLevel === "" || item.experience === experienceLevel;
      const matchesPool = !poolRequired || item.pool === true;
      return matchesCity && matchesExperience && matchesPool;
    });

    setSearchResults(filteredTable);
  };

  function toBookForm(id) {
    Nav(`/bookingForm/${id}`);
  }

  return (
    <div>
      <h1 className={xyz.header}>Exotourista</h1>
      <div className={xyz.options}>
        <div>
          <label>City:</label>
          <select onChange={(e) => setCity(e.target.value)} value={city}>
            <option value="">All</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>
          </select>
        </div>

        <div>
          <label>Experience Level:</label>
          <select onChange={(e) => setExperienceLevel(e.target.value)} value={experienceLevel}>
            <option value="">All</option>
            <option value="Budget">Budget</option>
            <option value="Business">Business</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" onChange={(e) => setPoolRequired(e.target.checked)} checked={poolRequired} />
            Pool required
          </label>
        </div>
      </div>
      <button onClick={handleSearch} className={xyz.srch}>Search</button>

      <table className={xyz.tableStyle}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Image</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Pool</th>
            <th>Price (per night)</th>
            <th>Wanna Book?</th>
          </tr>

          {searchResults.map((x) => (
            <tr key={x.id}>
              <td>
                <Link to={`/detailPage/${x.id}`}>{x.name}</Link>
              </td>
              <td>{x.shortDescription}</td>
              <td>{x.longDescription}</td>
              <td>
                <img src={x.imageLink} alt="hotelpic" width="100" />
              </td>
              <td>{x.location}</td>
              <td>{x.experience}</td>
              <td>{x.pool ? "Yes" : "No"}</td>
              <td>{x.price}</td>
              <td>
                <button onClick={()=> toBookForm(x.id)}>Book Now</button>
              </td>
            </tr>
          ))}

          {searchResults.length === 0 && (
            <tr>
              <td colSpan="9">No matching hotels found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HotelTables;
