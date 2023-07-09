import React, { useState } from 'react';
import xyz from "./HotelTables.module.css";
import { Link, useNavigate } from 'react-router-dom';

const HotelTables = ({data}) => {

    const Nav = useNavigate();
    const [searchResults, setSearchResults] = useState(data);
    const [search, setSearch] = useState("");
    const handleSearch = () => {
        const filteredTable = data.filter((item) =>
          item.Name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredTable);
      };

      function toBookForm(){
        Nav('/bookingForm');
      }
  return (
    <div>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} value={search}/>
        <button onClick={handleSearch}>Search</button>
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
                    <th>Price(per night)</th>
                    <th>Wanna Book</th>
                </tr>
                {searchResults.map((x)=> (
                <tr key={x.sno}>
                <td>
                   <Link to={`/detailPage/${x.sno}`} > {x.Name}</Link>
                </td>
                <td>{x.ShortDescription}</td>
                <td>{x.LongDescription}</td>
                <td> <img src={x.imageLink} alt="hotelpic" width="100" /> </td>
                <td>{x.Location}</td>
                <td>{x.Experience}</td>
                <td>{x.Pool}</td>
                <td>{x.Price}</td>
                <td><button onClick={toBookForm}>Book Now</button></td>
                </tr>
                        ))}
                        {searchResults.length === 0 && (
            <tr>
              <td colSpan="8">No matching hotels found.</td>
            </tr>
          )}
            </tbody>
        </table>

        
    </div>
  )
}

export default HotelTables
