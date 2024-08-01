import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './index.css';

class CartButton extends Component {
  static contextType = CartContext;

  render() {
    const { cart } = this.context;
    const totalItems = cart ? cart.length : 0;

    return (
      <div className="cart-button">
        <Link to="/checkout" className="cart-button-link">
          <button>
            Checkout ({totalItems})
          </button>
        </Link>
      </div>
    );
  }
}

export default CartButton;
