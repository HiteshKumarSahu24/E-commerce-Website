import React, { useState, useContext } from 'react';
import './Checkout.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Conetext/ShopContext'

const CheckoutPage = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    const [shippingAddress, setShippingAddress] = useState({
        fullName: '',
        contactNumber: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
    });
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform further actions, such as sending the form data to a server
        console.log('Shipping Address:', shippingAddress);
        setOrderConfirmed(true);
    };
    return (
        <div className="main-container">
            <div className="checkout-sidebar">
                <div className="cartitems-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cartitems-totol-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-totol-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-totol-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                </div>
                <div className="order-confirmation">
                    <h2>NOTE!</h2>
                    <ul>
                        <li>Payment will be on the time of delivery.</li>
                        <li>If you want to cancel the order after placing an order, just call us on <strong>9675957568</strong>.</li>
                    </ul>
                </div>
            </div>
            <div className={`checkout-container ${orderConfirmed ? 'order-confirmed' : ''}`}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <br />
                        <input
                            type="text"
                            name="fullName"
                            placeholder='Enter Your Name'
                            value={shippingAddress.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        Contact Number:
                        <br />
                        <input
                            type="tel"
                            name="contactNumber"
                            pattern="[6-9]{1}[0-9]{9}"
                            placeholder='Enter Your Contace Number'
                            value={shippingAddress.contactNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        Address:
                        <br />
                        <input
                            type="text"
                            name="addressLine1"
                            placeholder='Enter Your Address'
                            value={shippingAddress.addressLine1}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        Landmark:
                        <br />
                        <input
                            type="text"
                            name="addressLine2"
                            placeholder='Enter the Landmark'
                            value={shippingAddress.addressLine2}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        City:
                        <br />
                        <input
                            type="text"
                            name="city"
                            placeholder='Enter Your City'
                            value={shippingAddress.city}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        State:
                        <br />
                        <input
                            type="text"
                            name="state"
                            placeholder='Enter Your State'
                            value={shippingAddress.state}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        Zip Code:
                        <br />
                        <input
                            type="text"
                            name="zipCode"
                            placeholder='Enter the ZipCode'
                            value={shippingAddress.zipCode}
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
