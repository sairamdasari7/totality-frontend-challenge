import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = {
    isAuthenticated: false, // or initialize with your logic
  };

  login = () => this.setState({ isAuthenticated: true });
  logout = () => this.setState({ isAuthenticated: false });

  render() {
    return (
      <AuthContext.Provider value={{ isAuthenticated: this.state.isAuthenticated }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
