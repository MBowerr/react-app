import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/cart" className="cart"><ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
