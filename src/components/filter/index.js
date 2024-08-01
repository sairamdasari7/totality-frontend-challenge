import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <h3>Filter Properties</h3>
        <label>
          Location:
          <input type="text" placeholder="Enter location" />
        </label>
        <label>
          Price Range:
          <input type="text" placeholder="Enter price range" />
        </label>
        <label>
          Number of Bedrooms:
          <input type="number" placeholder="Enter number of bedrooms" />
        </label>
        <label>
          Amenities:
          <input type="text" placeholder="Enter amenities" />
        </label>
        <button>Apply Filters</button>
      </div>
    );
  }
}

export default Filter;
