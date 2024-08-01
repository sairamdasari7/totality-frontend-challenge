import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/index';
import Checkout from './components/checkout/index';
import PropertiesPage from './components/propertiesPage/index';
import { CartProvider } from './contexts/CartContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <CartProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
    );
  }
}

export default App;
