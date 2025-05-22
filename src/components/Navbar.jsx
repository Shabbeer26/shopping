import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Home.css';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🛒 ShopEase</div>
      <button className="cart-button" onClick={onCartClick}>
        View Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;