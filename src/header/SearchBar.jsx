import React from 'react';
import styles from './Header.module.css';

export const SearchBar = () => (
  <form className={styles.searchForm}>
    <label htmlFor="searchInput" className={styles.visuallyHidden}>
      Search
    </label>
    <input
      id="searchInput"
      type="search"
      className={styles.searchInput}
      placeholder="Value"
    />
    <img
      loading="lazy"
      src="cross"
      alt="Search"
      className={styles.searchIcon}
    />
  </form>
);