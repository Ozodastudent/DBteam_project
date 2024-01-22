// components/ErrorComponent.jsx
import React from 'react';
import './errorComponent.css';

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-container">
      <span className="error-icon" role="img" aria-label="Error Icon">
       😟
      </span>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorComponent;
