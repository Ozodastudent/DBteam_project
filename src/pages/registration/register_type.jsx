import React, { Component, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import axios from 'axios';


const RegistrationType = () => {
  let navigate = useNavigate(); // Hook to navigate

  // Function to handle Seller registration
  const handleSellerRegister = () => {
    navigate('/register_agent'); // Update with your desired path
  };

  // Function to handle Buyer/Agent registration
  const handleBuyerRegister = () => {
    navigate('/register_customer'); // Update with your desired path
  };
  return (
    <div className="registration-container">
      <div className="registration-header">
        Sign up as an Agent / Customer
      </div>
      <div className="registration-options">
        <div className="option buyer">
          {/* <img src={houseIcon} alt="house icon" className="option-icon"/> */}
          <button className="option-button" onClick={handleBuyerRegister}>
            I am the customer and want to by a property by using this website.
          </button>
        </div>
        <div className="option seller">
          {/* <img src={agentIcon} alt="agent icon" className="option-icon"/> */}
          <button className="option-button" onClick={handleSellerRegister}>
          I am the Agent and want to place a property on this website.
          </button>
        </div>
      </div>
      
      <div className="login-prompt">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default RegistrationType;