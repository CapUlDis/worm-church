import {memo} from 'react';

import WormChurchIcon from 'assets/icons/worm_church.svg?react';

import styles from './Header.module.css';

export const Header = memo(() => {
  return (
    <div className={styles.container}>
      <WormChurchIcon />
      <span className="title-3">Церковь Святого Червячка</span>
    </div>
  );
});

Header.displayName = 'Header';
