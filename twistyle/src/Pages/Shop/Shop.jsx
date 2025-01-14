import React from 'react';
import "./Shop.css";
import { Link } from 'react-router-dom';

// Import assets
import s1 from '../../assets/scrunch1.jpg';
import s2 from '../../assets/scrunch2.jpg';
import s3 from '../../assets/scrunch3.jpg';
import s4 from '../../assets/scrunch4.jpg';
import s5 from '../../assets/scrunch5.jpg';
import e1 from '../../assets/e1.png';
import e2 from '../../assets/e2.png';
import e3 from '../../assets/e3.png';
import e4 from '../../assets/e4.png';
import e5 from '../../assets/e5.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';

function Shop() {
  const menuItems = [
    // Scrunchies
    { name: 'Scrunchie 01', image: s1, price: '5000', description: 'Stylish scrunchie perfect for any occasion.' },
    { name: 'Scrunchie 02', image: s2, price: '4500', description: 'Elegant and durable scrunchie.' },
    { name: 'Scrunchie 03', image: s3, price: '5000', description: 'Premium-quality scrunchie for a chic look.' },
    { name: 'Scrunchie 04', image: s4, price: '4000', description: 'Soft and comfortable scrunchie.' },
    { name: 'Scrunchie 05', image: s5, price: '4000', description: 'Perfect scrunchie for everyday use.' },

    // Earrings
    { name: 'Earring 01', image: e1, price: '4000', description: 'Beautiful handcrafted earrings.' },
    { name: 'Earring 02', image: e2, price: '4000', description: 'Modern and lightweight earrings.' },
    { name: 'Earring 03', image: e3, price: '4000', description: 'Elegant and stylish earrings for special occasions.' },
    { name: 'Earring 04', image: e4, price: '4000', description: 'Classic design with a modern twist.' },
    { name: 'Earring 05', image: e5, price: '4000', description: 'Unique earrings to enhance your style.' },

    // Clawclips
    { name: 'Clawclip 01', image: c1, price: '4000', description: 'Durable and stylish claw clip.' },
    { name: 'Clawclip 02', image: c2, price: '4000', description: 'Perfect for securing hair in style.' },
    { name: 'Clawclip 03', image: c3, price: '4000', description: 'Trendy claw clip for all hair types.' },
    { name: 'Clawclip 04', image: c4, price: '4000', description: 'Comfortable and lightweight claw clip.' },
    { name: 'Clawclip 05', image: c5, price: '4000', description: 'Elegant claw clip for a polished look.' },
  ];

  // Filter items by category
  const scrunchieItems = menuItems.filter((item) => item.name.includes('Scrunchie'));
  const earringItems = menuItems.filter((item) => item.name.includes('Earring'));
  const clawclipItems = menuItems.filter((item) => item.name.includes('Clawclip'));

  return (
    <div>
      {/* Scrunchies Section */}
      <div className="menu-container">
        <h1>Scrunchies Collection</h1>
        <div className="menu-grid">
          {scrunchieItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Rs. {item.price}</p>
              <Link to="/order-now" className="order-button">Order Now</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Earrings Section */}
      <div className="menu-container">
        <h1>Earrings Collection</h1>
        <div className="menu-grid">
          {earringItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Rs. {item.price}</p>
              <Link to="/order-now" className="order-button">Order Now</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Clawclips Section */}
      <div className="menu-container">
        <h1>Clawclips Collection</h1>
        <div className="menu-grid">
          {clawclipItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Rs. {item.price}</p>
              <Link to="/order-now" className="order-button">Order Now</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop

