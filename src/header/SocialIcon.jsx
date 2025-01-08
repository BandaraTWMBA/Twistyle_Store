import React from 'react';
import styles from './SocialIconsBar.module.css';

export const SocialIcon = ({ src, platform }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={`${platform} social media icon`}
      className={styles.socialIcon}
    />
  );
};