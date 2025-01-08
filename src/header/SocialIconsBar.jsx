import React from 'react';
import { SocialIcon } from './SocialIcon';
import styles from './SocialIconsBar.module.css';

const socialIcons = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18d8878669c657de877718abc28a0b5ff3130396754e458f4e56bd5fea0be154?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f', platform: 'Facebook' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0c2bc6cc79ed793a268af4498b6953301675837bb8b631e0f7b66186b8649bb?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f', platform: 'Twitter' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1fd4380ca78569ee7df301ba6b071dcf23cde2db88500e73b5046850f9f27eb7?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f', platform: 'Instagram' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce040fb130c50d5637dfec2d9671f799addedbe1a23acda8156baf14e348d7cd?placeholderIfAbsent=true&apiKey=63f360ce1eed4a52abb19ddfc14cad5f', platform: 'LinkedIn' }
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