import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';
import axios from 'axios';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const { id, title, price, market_value, image, area, address, date_listed, bathrooms, bedrooms, currency, agent } = data;
  const [agentDetails, setAgentDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/contact-info/${agent}`);
        setAgentDetails(response.data);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    const fetchAddressDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/addresses/${address}`);
        setAddressDetails(response.data);
      } catch (error) {
        console.error('Error fetching address details:', error);
      }
    };

    fetchAgentDetails();
    fetchAddressDetails();
  }, [agent, address]);

  const handleCallButtonClick = async () => {
    try {
      navigate(`/sales/${id}`);
    } catch (error) {
      console.error('Error navigating to each home:', error);
    }
  };

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <div className="like-button" onClick={handleLikeButtonClick}>
        {isLiked ? '❤️' : '🤍'}
      </div>

      <img src={image.image} alt="Property Image" />
      <div className="card_items">
        <div className="card-details">
          <div card_head>
            <h2>{title}</h2>
            {market_value && (
              <p className="market-value">Market Value: {market_value} { currency }</p>
            )}
          </div>
          <p className="price">{price} { currency }</p>
        </div>
        <div className="card-actions">
          <div>
            <div className='icon_box'>
              <p className="icon">&#x1F3E0;</p> {addressDetails && addressDetails.city}
            </div>
            <div className='icon_box'>
              <p className="icon">&#x1F4C5;</p> 25.12.2023
            </div>
            {agentDetails && (
              <div className='icon_box'> 
                <p className="icon">&#x1F4F1;</p> { agentDetails.phone }
              </div>
            )}
          </div>
          <div>
            <div className='icon_box'>
              <p className="icon">&#x1F6AA;</p> {bedrooms}
            </div>
            <div className='icon_box'>
              <p className="icon">&#x1F6BF;</p> {bathrooms}
            </div>
          </div>
          <div>
            <button onClick={handleCallButtonClick} className="call-button">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
