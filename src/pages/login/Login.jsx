import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    role: 'customer', // Default role is customer
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password, role } = this.state;

    // Perform login logic with role information
    console.log('Login data:', { username, password, role });

    // Reset form after login
    this.setState({
      username: '',
      password: '',
      role: 'customer',
    });
  };

  render() {
    return (
      <form className='form-container' onSubmit={this.handleLogin}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>

        <label>
          Role:
          <select name="role" value={this.state.role} onChange={this.handleInputChange}>
            <option value="customer">Customer</option>
            <option value="agent">Agent</option>
          </select>
        </label>
        <Link to="/register">Register</Link>

        <button className='btn' type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
