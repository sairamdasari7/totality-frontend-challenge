import React, { Component } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './index.css';
import withNavigate from '../withNavigate'; // Import withNavigate

class CheckoutForm extends Component {
  static contextType = CartContext;

  state = {
    name: '',
    email: '',
    address: '',
    paymentMethod: 'UPI', // Default payment method
    bookingConfirmed: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ bookingConfirmed: true });
  };

  handleLogout = () => {
    this.props.navigate('/');
  };

  render() {
    const { name, email, address, paymentMethod, bookingConfirmed } = this.state;
    const { getTotalAmount } = this.context;
    const totalAmount = getTotalAmount();

    return (
      <div className="checkout-form">
        <h2 className='heading'>Checkout</h2>
        <p className='paragraph'>Total Amount: ${totalAmount.toFixed(2)}</p>
        <button onClick={this.handleLogout} className="logout-button">Logout</button>
        <form onSubmit={this.handleSubmit}>
          <label className='para'>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
          </label>
          <label className='para'>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </label>
          <label className='para'>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => this.setState({ address: e.target.value })}
              required
            />
          </label>
          <label className='para'>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => this.setState({ paymentMethod: e.target.value })}
              required
            >
              <option value="UPI">UPI</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </label>
          <button type="submit">Confirm Booking</button>
        </form>
        {bookingConfirmed && <p className="confirmation-message">The property is booked successfully!</p>}
      </div>
    );
  }
}

export default withNavigate(CheckoutForm); // Wrap and export the class component
