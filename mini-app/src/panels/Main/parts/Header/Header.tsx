import {memo} from 'react';

import WormChurchIcon from 'assets/icons/worm_church.svg?react';

import styles from './Header.module.css';

export const Header = memo(() => {
  return (
    <div className={styles.container}>
      <WormChurchIcon />
      <div className={styles.textBlocks}>
        <div className={styles.block}>
          <span className="title-1">
            Церковь Святого
            <br />
            Червячка
          </span>
        </div>
        <div className={styles.block}>
          <span className="text-regular">
            Червячок уже посетил <span className="text-medium">873 384</span> профилей
            <br />
            Присоединяйтесь к нашей <a href="">группе</a> и <a href="">чату</a>
          </span>
        </div>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
