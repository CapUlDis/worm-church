import {Link, Text, Title} from '@vkontakte/vkui';
import {memo} from 'react';

import WormChurchIcon from 'assets/icons/worm-church.svg?react';

import styles from './Header.module.css';

export const Header = memo(() => {
  return (
    <div className={styles.container}>
      <WormChurchIcon />
      <div className={styles.textBlocks}>
        <div className={styles.block}>
          <Title level="1" weight="2" Component="h1">
            Церковь Святого
            <br />
            Червячка
          </Title>
        </div>
        <div className={styles.block}>
          <Text>
            Червячок уже посетил{' '}
            <Text weight="2" normalize={false}>
              873 384
            </Text>{' '}
            профилей
            <br />
            Присоединяйтесь к нашей{' '}
            <Link>
              <u>группе</u>
            </Link>{' '}
            и{' '}
            <Link>
              <u>чату</u>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
