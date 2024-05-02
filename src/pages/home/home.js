import React from 'react';
import '../home/home.css';
import "./home.css";
import prod1 from "../../assets/1.png";
import prod13 from "../../assets/13.png"
export const Home = () => {
  return (
    <div>
      <h1>The PSU Shop</h1>
      <hr></hr>
      <p>We sell the latest and greatest technology from your favorite brands, as well as the coolest home and living appliances!</p>
      <h2>Best Selling Products!</h2>
      <div className="product-container">
        <div className="product-image-container">
          <img src={prod1} alt="Apple MacBook Pro" className="product-image" />
        </div>
        <div className="product-info">
          <h2>Apple MacBook Pro</h2>
          <p className="description">Powerful laptop for professionals</p>
          <p>Price: $1999.99</p>
        </div>
      </div>

      <div className="product-container">
        <div className="product-image-container">
          <img src={prod13} alt="Samsung Dryer" className="product-image" />
        </div>
        <div className="product-info">
          <h2>Samsung Dryer</h2>
          <p className="description">Stackable Vented Electric Dryer</p>
          <p>Price: $699.99</p>
        </div>
      </div>
    </div>
  );
}
