import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
import axios from 'axios';import axios from 'axios';
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password, role } = this.state;

    // Perform login logic with role information
    axios.post( "https://vivahomes.uz/api/v1/token/", {email:this.state.email, password: this.state.password})
    .then((res) => {
      if(res.status === 200){
        window.location.replace('/')
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    // Reset form after login
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <>
      <div className="login-box">

      <>
      <div className="login-box">

      <form className='form-container' onSubmit={this.handleLogin}>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>

        <Link className="link-registr" to="/register">Register</Link>

        <button className='btn' type="submit">Login</button>
      </form>
      </div>
      </>
      </div>
      </>
    );
  }
}

export default LoginForm;