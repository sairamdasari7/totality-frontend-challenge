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
      { email: 'user@abc.com', password: 'user@abc' },
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
        <div className="demo-credentials">
          <h2>Demo Credentials:</h2>
          <ul>
            <li>Email: user@abc.com, Password: user@abc</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
