import React, { useState, useEffect } from 'react';
import './card.css';
import axios from 'axios';
import "./card.css"; 

const Card = ({ data }) => {
  const { title, price, market_value, image, area, address, date_listed, bathrooms, bedrooms, currency, agent } = data;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [agentDetails, setAgentDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);

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

  const handleCallButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="card">
     
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
              <p className="icon">&#x1F4C5;</p> { date_listed }
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
            {isPopupVisible && (
              <div className="popup">
                <span className="close-button" onClick={handleCloseButtonClick}>
                  &times;
                </span>
                <p>{agentDetails && agentDetails.phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
