import React, { Component, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
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
      }
    }
    await axios.post ("https://vivahomes.uz/api/v1/customers/", data)
    .then((res) => {
      if(res.status === 201 ){
        navigate('/')
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
          <>
          <div className="register-box">

          <form className='form-container' onSubmit={(submit)} >
            <label>
              First Name:
              <input type="text" name="first_name" required onChange={(e) => {
                setName(e.target.value)
              }} />
            </label>
            <label>
              Last Name:
              <input type="text" name="last_name" required onChange={(e) => {
                setSurname(e.target.value)
              }} />
            </label>
            <label>
              Email:
              <input type="email" name="email" required onChange={(e) => {
                setEmail(e.target.value)
              }}  />
            </label>
            <label>
              Password:
              <input type="password" name="password" required onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </label>

            <Link className="link-registr" to="/login">Login</Link>

            <button className='btn' type="submit">Register</button>
          </form>
          </div>
          </>
        );
    }
export default RegistrationForm;