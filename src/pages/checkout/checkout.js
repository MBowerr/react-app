import React, { useState, useContext } from 'react';
import "./checkout.css";
import { ShopContext } from "../../context/shop-context";

const Checkout = () => {
    const {getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const salesTotal = (totalAmount * 1.06).toFixed(2);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showInvoice, setShowInvoice] = useState(false);

    const handleCheckout = (e) => {
    e.preventDefault();

    const invoiceData = {
      firstName,
      lastName,
      email,
      address,
      city,
      zip,
      country,
      paymentMethod,
      salesTotal,
    };
    
    setShowInvoice(true);
    };

    return (
        <div>
        {!showInvoice ? (
            <div>
            <h1>Checkout</h1>
            <h2>Total after tax: ${salesTotal}</h2>
            <form onSubmit={handleCheckout}>
                <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                <label>City:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                <label>Zip:</label>
                <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
                <div>
                <label>Country:</label>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                <label>Payment Method:</label>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                </select>
                </div>
                <button type="submit">Checkout</button>
            </form>
            </div>
        ) : (
            <div className="invoice">
            <h1>Invoice</h1>
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Address: {address}, {city}, {zip}, {country}</p>
            <p>Payment Method: {paymentMethod}</p>
            <p>Total Amount: ${salesTotal}</p>
            </div>
        )}
        </div>
    );
};

export default Checkout;
