import React from 'react';
import { IconButton } from './IconButton';
import { SearchBar } from './SearchBar';
import styles from './Header.module.css';


const navigationIcons = [
  { src: "/user.png", alt: "Navigation item 1" },
  { src: "/heart(1).png", alt: "Navigation item 2" },
  { src: "/shopping-cart.png", alt: "Navigation item 3" }
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
            <div className={styles.searchContainer}>
              <IconButton src="search.png" alt="Menu" />
              <SearchBar />
            </div>
          </div>
          
          <div className={styles.centerSection}>
            <h1 className={styles.brandName}>
              Twistyle
              <br />
            </h1>
          </div>
          
          <div className={styles.rightSection}>
            <nav className={styles.navigation}>
              {navigationIcons.map((icon, index) => (
                <IconButton
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};