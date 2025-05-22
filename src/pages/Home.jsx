import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import { auth } from '../firebase';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const filterByCategory = (category) => {
    const result = products.filter(p => p.category === category);
    setFiltered(result);
  };

  const showAll = () => setFiltered(products);

  const goToCartPage = () => {
    navigate('/cart', { state: { cart } });
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth); // Sign the user out
      navigate('/login'); // Redirect to the login page
    } catch (err) {
      alert("Error signing out: " + err.message);
    }
  };

  return (
    <>
      {/* Pass cart count directly from here */}
      <Navbar user={user} cartCount={cart.length} onCartClick={goToCartPage} />

      <div className="home-container">
        {/* Category Filters */}
        <div style={{ marginBottom: '20px' }}>
          <button className="category-button" onClick={showAll}>All</button>
          <button className="category-button" onClick={() => filterByCategory("men's clothing")}>Men's Clothing</button>
          <button className="category-button" onClick={() => filterByCategory("women's clothing")}>Women's Clothing</button>
        </div>

        {/* Product Cards */}
        <div className="product-grid">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              <p><strong>${product.price}</strong></p>
              <p style={{ fontSize: '13px', flexGrow: 1 }}>{product.description.slice(0, 60)}...</p>
              <button className="add-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-button-container">
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>

      <Footer />
    </>
  );
};

export default Home;
