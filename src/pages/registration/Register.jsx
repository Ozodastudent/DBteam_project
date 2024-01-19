import React, { Component } from 'react';

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'customer', // Default role is customer
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRegister = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, role } = this.state;

    // Perform registration logic with role information
    console.log('Registration data:', { firstName, lastName, email, password, role });

    // Reset form after registration
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'customer',
    });
  };

  render() {
    return (
      <form className='form-container' onSubmit={this.handleRegister}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
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

        <button className='btn' type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
