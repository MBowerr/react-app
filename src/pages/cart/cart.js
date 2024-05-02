import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <Link to={{ pathname: '/checkout', state: { totalAmount } }} className="button-link">Checkout</Link>
        </div>
      ) : (
        <div className="nocheckout">
        <><h2> No Items In Your Shopping Cart</h2><button onClick={() => navigate("/products")}> Go Back Shopping </button></>
        </div>
      )}
    </div>
  );
};
