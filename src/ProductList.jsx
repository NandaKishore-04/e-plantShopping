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
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sanseveria_trifasciata_Prain.jpg/220px-Sanseveria_trifasciata_Prain.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.jpg/220px-Chlorophytum_comosum_0001.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/220px-Spathiphyllum_cochlearispathum_RTBG.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Boston_fern_on_a_stick.jpg/220px-Boston_fern_on_a_stick.jpg',
          description: 'Acts as a natural humidifier and air purifier.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_-_Rubber_plant.jpg/220px-Ficus_elastica_-_Rubber_plant.jpg',
          description: 'Absorbs airborne chemicals and toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/220px-Aloe_vera_flower_inset.png',
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
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Lavender.jpg/220px-Above_Lavender.jpg',
          description: 'Calming scent that reduces anxiety and stress.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jasmine_flowers.jpg/220px-Jasmine_flowers.jpg',
          description: 'Sweet fragrance that improves mood and sleep.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rosemary_bush.jpg/220px-Rosemary_bush.jpg',
          description: 'Woody aroma that enhances memory and focus.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mintgarden.jpg/220px-Mintgarden.jpg',
          description: 'Fresh scent that boosts energy and alertness.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lemon_balm_bush.jpg/220px-Lemon_balm_bush.jpg',
          description: 'Citrusy fragrance that calms nerves.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hyacinthus_orientalis_floriade.jpg/220px-Hyacinthus_orientalis_floriade.jpg',
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
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Echinacea_purpurea.jpg/220px-Echinacea_purpurea.jpg',
          description: 'Boosts the immune system and fights infections.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mentha_x_piperita_003.jpg/220px-Mentha_x_piperita_003.jpg',
          description: 'Relieves headaches and aids digestion.',
          cost: '$13',
        },
        {
          name: 'Turmeric',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Curcuma_longa_roots.jpg/220px-Curcuma_longa_roots.jpg',
          description: 'Anti-inflammatory and antioxidant properties.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Chamomile%40original_size.jpg/220px-Chamomile%40original_size.jpg',
          description: 'Soothes anxiety and promotes restful sleep.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Calendula_close.jpg/220px-Calendula_close.jpg',
          description: 'Heals skin and reduces inflammation.',
          cost: '$12',
        },
        {
          name: 'Valerian',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-137.jpg/220px-Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-137.jpg',
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
    return (
      <CartItem
        onContinueShopping={handleContinueShoppingFromCart}
      />
    );
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
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x120?text=' + plant.name;
                    }}
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