import * as React from "react";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/214aa163c8e362541a6088a7d97e5e15b31df4e07b59dc4d405e2b24c9d2c505?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f"
          className={styles.heroBackground}
          alt="Hero background showcasing our products"
        />
        <button 
          className={styles.ctaButton}
          tabIndex={0}
          aria-label="Shop now button"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}