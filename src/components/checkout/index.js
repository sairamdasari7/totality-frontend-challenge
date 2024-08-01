import React, { Component } from 'react';
import CheckoutForm from '../checkoutForm';
import './index.css';

class Checkout extends Component {
  render() {
    return (
      <div className="checkout-page">
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
