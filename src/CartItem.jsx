import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost of all items in cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateTotalCost(item);
    }, 0).toFixed(2);
  };

  // Calculate total cost for a single item type
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1));
    return unitPrice * item.quantity;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      {/* Navbar */}
      <nav className="cart-navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">🌿</div>
          <div>
            <div className="navbar-title">Paradise Nursery</div>
            <div className="navbar-subtitle">Where Green Meets Serenity</div>
          </div>
        </div>
        <div className="navbar-links">
          <span className="navbar-link" onClick={handleContinueShopping}>Home</span>
          <span className="navbar-link" onClick={handleContinueShopping}>Plants</span>
          <span className="navbar-cart">
            🛒
            {cartItems.reduce((t, i) => t + i.quantity, 0) > 0 && (
              <span className="cart-badge">
                {cartItems.reduce((t, i) => t + i.quantity, 0)}
              </span>
            )}
          </span>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="cart-content">
        <h2 className="cart-total-heading">
          Total Cart Amount: ${calculateTotalAmount()}
        </h2>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.name} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/120x100?text=' + item.name;
                    }}
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">{item.cost}</p>

                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart-item-total">
                      Total: ${calculateTotalCost(item).toFixed(2)}
                    </p>

                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="checkout-btn"
                onClick={handleCheckoutShopping}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;