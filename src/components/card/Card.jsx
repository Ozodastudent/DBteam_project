import React, { useState, useEffect } from 'react';
import './card.css';
import CardImg from '../../assets/images/about1.jpg';
import axios from 'axios';

const Card = ({ data }) => {
  const { title, price, image, area, address, date_listed, bathrooms, bedrooms, currency, agent } = data;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [agentDetails, setAgentDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);

  useEffect(() => {
    // Fetch agent details when the component mounts
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/contact-info/${agent}`);
        setAgentDetails(response.data);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    // Fetch address details when the component mounts
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
          <h2>{title}</h2>
          <p className="price">{price} { currency }</p>
        </div>

        <div className="card-actions">
          <div>
            <p>
              <span className="icon">&#x1F3E0;</span> {addressDetails && addressDetails.city}
            </p>
            <p>
              <span className="icon">&#x1F4C5;</span> { date_listed }
            </p>
            {agentDetails && (
              <p>
                <span className="icon">&#x1F4F1;</span> { agentDetails.phone } {/* Assuming the agent's phone number is stored in the 'phone' property */}
              </p>
            )}
          </div>
          <div>
            <p>
              <span className="icon">&#x1F6AA;</span> {bedrooms}
            </p>
            <p>
              <span className="icon">&#x1F6BF;</span> {bathrooms}
            </p>
          </div>
          <div>
            <button onClick={handleCallButtonClick} className="call-button">
              Позвонить
            </button>
            {isPopupVisible && (
              <div className="popup">
                <span className="close-button" onClick={handleCloseButtonClick}>
                  &times;
                </span>
                {/* Display the agent's phone number in the popup */}
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
