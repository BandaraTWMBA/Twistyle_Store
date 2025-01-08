import React from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const navItems = [
    { label: 'New Arrivals', link: '/new-arrivals' },
    { label: 'Shop', link: '/shop' },
    { label: 'Sale', link: '/sale' },
    { label: 'About', link: '/about' }
  ];

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.mainNav}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={styles.navItem}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.shippingBanner}>WORLDWIDE SHIPPING</div>
    </nav>
  );
};

export default NavigationBar;
                       