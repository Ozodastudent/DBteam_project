import React, { Component, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register2.css'
import axios from 'axios';


const RegisterAgent = () => {
  // Add your state management and event handlers here
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        first_name: name,
        last_name: surname,
        email: email,
        password: password,
        role: "Agent",
        
      },
      contact: {
        // Ensure this is an object, not an array
        name: name,
        email: email,
        phone: phone,
        notes: "empty",
      },
    };
  
    try {
      const response = await axios.post("https://vivahomes.uz/api/v1/agents/", data);
      if (response.status === 201) {
        navigate('/');
        console.log('Successfully registered');
      }
    } catch (err) {
      console.error('Error response:', err.response); // More detailed error info
      console.error('Error data:', err.response.data); // Log any error messages from the server
    }
  };


  return (
    <div className="profile-container">
        <div className="profile-header">
            Agent Personal Information
        </div>
        <div className="profile-picture-section">
            <div className="profile-picture"></div>
            <button className="upload-button">Upload</button>
            <button className="delete-button">Delete</button>
        </div>
        <div className="form-section">
            <input type="text" placeholder="Enter first name" className="form-input half" required onChange={(e) => {
                setName(e.target.value)
              }} />
            <input type="text" placeholder="Enter surname" className="form-input half" required onChange={(e) => {
                setSurname(e.target.value)
              }} />
            <input type="text" placeholder="Phone" className="form-input half" required onChange={(e) => {
                setPhone(e.target.value)
              }} />
                
            <input type="email" placeholder="Email" name="email" className="form-input" required onChange={(e) => {
                setEmail(e.target.value)
              }}  />
            <input type="password" placeholder="Password" className="form-input" required onChange={(e) => {
              setPassword(e.target.value)
             }} />
        </div>
        
        <button className="save-button" onClick={(submit)}>Register as Agent</button>
    </div>
  );
};

export default RegisterAgent;



