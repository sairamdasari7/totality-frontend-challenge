import React, { Component } from 'react';

const CartContext = React.createContext();

class CartProvider extends Component {
  state = {
    cart: [],
  };

  addToCart = (item) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item],
    }));
  };

  getTotalAmount = () => {
    const { cart } = this.state;
    return cart.reduce((total, item) => total + item.price, 0);
  };

  render() {
    const { cart } = this.state;
    return (
      <CartContext.Provider value={{
        cart,
        addToCart: this.addToCart,
        getTotalAmount: this.getTotalAmount,
      }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartProvider, CartContext };
