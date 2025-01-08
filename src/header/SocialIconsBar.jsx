import React from 'react';
import { SocialIcon } from './SocialIcon';
import styles from './SocialIconsBar.module.css';

const socialIcons = [
  { src: '/facebook.png', platform: 'Facebook' },
  { src: '/instagram.png', platform: 'Instagram' },
  { src: '/tik-tok.png', platform: 'TikTok' },
  { src: '/envelope.png', platform: 'Email' }
];


export const SocialIconsBar = () => {
  return (
    <div className={styles.socialIconsContainer}>
      <div className={styles.socialIconsWrapper}>
        <div className={styles.socialIconsList}>
          {socialIcons.map((icon, index) => (
            <SocialIcon
              key={index}
              src={icon.src}
              platform={icon.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
};