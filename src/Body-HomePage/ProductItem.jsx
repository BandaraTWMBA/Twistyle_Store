import * as React from "react";
import styles from './ProductDisplay.module.css';

function ProductItem({ src, label, alt }) {
  return (
    <div className={styles.productItem}>
      <img loading="lazy" src={src} alt={alt} className={styles.productImage} />
      <div className={styles.labelBox}>{label}</div>
    </div>
  );
}

export default ProductItem;