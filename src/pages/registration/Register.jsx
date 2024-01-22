import React, { Component} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import axios from 'axios';
class RegistrationForm extends Component {

  state = {
    user: {
   first_name: "",
   last_name: "",
   password: "",
   role: "customer",
   email: "",
   last_login: "2024-01-21T17:14:03.444Z",
   is_superuser: true,
   is_active: true,
   profile_image: 0,
   groups: [],
   user_permissions: [ ]
    },
    address:0
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRegister = async (e) => {
    const navigate = useNavigate()
    e.preventDefault();
    // const { } = this.state
     await axios.post ("https://vivahomes.uz/api/v1/customers/", this.state, {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })
    // Perform registration logic with role information
    console.log('Registration data:', this.state);

    // Reset form after registration
    this.setState({
      user: {
        first_name: "",
        last_name: "",
        password: "",
        role: "customer",
        email: "",
        last_login: "2024-01-21T17:14:03.444Z",
        is_superuser: true,
        is_active: true,
        profile_image: 0,
        groups: [],
        user_permissions: [ ]
         },
         address:0
    });
  };

  render() {
    return (
      <>
      <div className="register-box">

      <form className='form-container' onSubmit={this.handleRegister}>
        <label>
          First Name:
          <input type="text" name="first_name" required value={this.state.user.first_name} onChange={this.handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" required value={this.state.user.last_name} onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" required value={this.state.user.email} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" required value={this.state.user.password} onChange={this.handleInputChange} />
        </label>

        <label>
          Role:
          <select name="role" value={this.state.user.role} required onChange={this.handleInputChange}>
            <option value="customer">Customer</option>
            <option value="agent">Agent</option>
          </select>
        </label>

        <Link className="link-registr" to="/login">Login</Link>

        <button className='btn' type="submit">Register</button>
      </form>
      </div>
      </>
    );
  }
}

export default RegistrationForm;