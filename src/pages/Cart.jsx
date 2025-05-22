import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css'; // ✅ Import the CSS file

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in the cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}

      {/* Footer with social icons */}
      <div className="cart-footer">
        <p>Follow us on social media</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
