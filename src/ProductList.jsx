import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&auto=format&fit=crop',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&auto=format&fit=crop',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&auto=format&fit=crop',
          description: 'Acts as a natural humidifier and air purifier.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&auto=format&fit=crop',
          description: 'Absorbs airborne chemicals and toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&auto=format&fit=crop',
          description: 'Clears formaldehyde and benzene from air.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=400&auto=format&fit=crop',
          description: 'Calming scent that reduces anxiety and stress.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400&auto=format&fit=crop',
          description: 'Sweet fragrance that improves mood and sleep.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&auto=format&fit=crop',
          description: 'Woody aroma that enhances memory and focus.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&auto=format&fit=crop',
          description: 'Fresh scent that boosts energy and alertness.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop',
          description: 'Citrusy fragrance that calms nerves.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&auto=format&fit=crop',
          description: 'Intense floral scent that uplifts the spirit.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Echinacea',
          image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&auto=format&fit=crop',
          description: 'Boosts the immune system and fights infections.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&auto=format&fit=crop',
          description: 'Relieves headaches and aids digestion.',
          cost: '$13',
        },
        {
          name: 'Turmeric',
          image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&auto=format&fit=crop',
          description: 'Anti-inflammatory and antioxidant properties.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&auto=format&fit=crop',
          description: 'Soothes anxiety and promotes restful sleep.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&auto=format&fit=crop',
          description: 'Heals skin and reduces inflammation.',
          cost: '$12',
        },
        {
          name: 'Valerian',
          image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&auto=format&fit=crop',
          description: 'Natural sedative for stress and sleep disorders.',
          cost: '$17',
        },
      ],
    },
  ];

  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShoppingFromCart = (e) => {
    setShowCart(false);
  };

  if (showCart) {
    return <CartItem onContinueShopping={handleContinueShoppingFromCart} />;
  }

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">🌿</div>
          <div>
            <div className="navbar-title">Paradise Nursery</div>
            <div className="navbar-subtitle">Where Green Meets Serenity</div>
          </div>
        </div>
        <div className="navbar-links">
          <span className="navbar-link" onClick={() => onContinueShopping()}>Home</span>
          <span className="navbar-link">Plants</span>
          <span className="navbar-cart" onClick={handleCartClick}>
            🛒
            {totalCartQuantity > 0 && (
              <span className="cart-badge">{totalCartQuantity}</span>
            )}
          </span>
        </div>
      </nav>

      {/* Plant Categories */}
      <div className="plant-categories">
        {plantsArray.map((category) => (
          <div key={category.category} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <span className="sale-badge">SALE</span>
                  <h3 className="plant-name">{plant.name}</h3>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <p className="plant-cost">{plant.cost}</p>
                  <p className="plant-description">{plant.description}</p>
                  <button
                    className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;