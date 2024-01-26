import React, { useState } from 'react';
import "./filter.css";
const Filter = ({ onSearch }) => {
  const [district, setDistrict] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rooms, setRooms] = useState('');
  const [isForSale, setIsForSale] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      forSale: isForSale,
      district,
      propertyType,
      rooms: rooms || undefined
    });
  };

  return (
    <div className="filter-bar">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${isForSale ? 'active' : ''}`}
          onClick={() => setIsForSale(true)}
        >
          For Sale
        </button>
        <button
          className={`toggle-button ${!isForSale ? 'active' : ''}`}
          onClick={() => setIsForSale(false)}
        >
          For Rent
        </button>
      </div>
      <form onSubmit={handleSubmit}>
      <select className='select_item'  value={district} onChange={(e) => setDistrict(e.target.value)} required>
            <option value="0" selected disabled>Districts</option>
            <option value="1"> Bektemir Tumani</option>
            <option value="2">Chilonzor Tumani</option>
            <option value="3">Mirobod Tumani</option>
            <option value="4">Mirzo Ulug'bek Tumani</option>
            <option value="5">Olmazor Tumani</option>
            <option value="6">Mirzo Ulug'bek Tumani</option>
            <option value="7">Sergeli Tumani</option>
            <option value="8">Shayhontohur tumani</option>
            <option value="9">Uchtepa tumani</option>
            <option value="10">Yakkasaroy tumani</option>
            <option value="11">Yashnaobod tumani</option>
            <option value="12">Yunusobod tumani</option>
    </select>
        <select className='select_item' required value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="" disabled>Select Property Type</option>
          <option value="home">Home</option>
          <option value="apartment">Apartment</option>
        </select>
        <select className='select_item' value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option value="">Select Rooms</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4 Rooms</option>
          <option value="5">5 Rooms</option>
          <option value="6">6 Rooms</option>
        </select>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Filter;
