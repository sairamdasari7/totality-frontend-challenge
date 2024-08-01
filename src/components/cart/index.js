import React, { Component } from 'react';
import './index.css';

class Cart extends Component {
  handleRemove = (propertyId) => {
    this.props.removeFromCart(propertyId);
  };

  render() {
    const { cartItems } = this.props;
    const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <button onClick={() => this.handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-summary">
          <h3>Total Cost: ${totalCost}</h3>
        </div>
      </div>
    );
  }
}

export default Cart;
