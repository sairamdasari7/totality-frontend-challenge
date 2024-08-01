import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './index.css';

class Home extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToProperties: false,
    users: [
      { email: 'user1@gmail.com', password: 'abc@321' },
      { email: 'user2@gmail.com', password: 'xyz@123' },
      { email: 'user3@gmail.com', password: 'alliswell@888' }
    ]
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    
    const { email, password, users } = this.state;
    const validUser = users.some(user => user.email === email && user.password === password);

    if (validUser) {
      this.setState({ redirectToProperties: true });
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  };

  render() {
    if (this.state.redirectToProperties) {
      return <Navigate to="/properties" />;
    }

    return (
      <div className="login-container">
        <h1 className='heading'>Login</h1>
        <form onSubmit={this.handleLogin}>
          <label className='para'>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className='para'>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Login</button>
          {this.state.error && <p className="error-message">{this.state.error}</p>}
        </form>
        
      </div>
    );
  }
}

export default Home;
