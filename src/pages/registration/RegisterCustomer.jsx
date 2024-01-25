import React, { Component, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register2.css'
import axios from 'axios';


const RegisterCustomer = () => {
  // Add your state management and event handlers here
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [address1, setAddress1] = useState()
  const [address2, setAddress2] = useState()
  const [city, setCity] = useState()
  const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault()
    const data = {
      user : {
        first_name: name,
        role: "Customer",
        email: email,
        password : password,
        last_name: surname,
        address_line_1: address1,
        address_line_2: address2,
        city: city
      }
    }
    await axios.post ("https://vivahomes.uz/api/v1/customers/", data)
    .then((res) => {
      if(res.status === 201 ){
        navigate('/');
        console.log('Successfully registered');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className="profile-container">
        <div className="profile-header">
            Customer Personal Information
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
            <input type="text" placeholder="Address line 1" className="form-input half" required onChange={(e) => {
                setAddress1(e.target.value)
              }} />
            <input type="text" placeholder="Address line 2" className="form-input half" required onChange={(e) => {
              setAddress2(e.target.value)
              }} />
            <input type="text" placeholder="City" className="form-input half" required onChange={(e) => {
              setCity(e.target.value)
             }} />            
            <input type="email" placeholder="Email" name="email" className="form-input" required onChange={(e) => {
                setEmail(e.target.value)
              }}  />
            <input type="password" placeholder="Password" className="form-input" required onChange={(e) => {
              setPassword(e.target.value)
             }} />
        </div>
        
        <button className="save-button" onClick={(submit)}>Register as Customer</button>
    </div>
  );
};

export default RegisterCustomer;
