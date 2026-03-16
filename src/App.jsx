import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleContinueShopping = () => {
    setShowProductList(false);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-left">
              <h1 className="landing-title">Welcome To<br />Paradise Nursery</h1>
              <p className="landing-tagline">Where Green Meets Serenity</p>
              <hr className="landing-divider" />
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="landing-right">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;