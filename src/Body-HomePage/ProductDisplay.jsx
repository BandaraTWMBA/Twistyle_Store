import * as React from "react";
import styles from './ProductDisplay.module.css';
import ProductItem from './ProductItem.jsx';

const products = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d1bb738a4dcf69aa348aba44ce273f4308ed15505b8cd723d352508ada65350?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f", label: "SCRUNCHIES", alt: "Scrunchies Image" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4617cb67e4f80e3135239b844c27eb24b9339f1b68c0ee7f0b6e6a97e886ead7?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f", label: "EARRINGS", alt: "Earrings Image" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b39a5a5916790a835f85a975cad3893107c69c2fb0a72cd2a3a628549772dfb5?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f", label: "CLAWCLIPS", alt: "Clawclips Image" }
];

function ProductDisplay() {
  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <div key={index} className={styles.column}>
          <ProductItem src={product.src} label={product.label} alt={product.alt} />
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;