import {Icon24ChevronCompactRight} from '@vkontakte/icons';
import {Avatar, Caption, Subhead, Title} from '@vkontakte/vkui';
import cn from 'classnames';
import {memo} from 'react';

import styles from './WormPath.module.css';

const path = [
  {
    id: 'ass 2',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass 3',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass 4',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass 5',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass 6',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass 7',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
];

const TWO = 2;

export const WormPath = memo(() => {
  return (
    <div className={styles.container}>
      <Title className={styles.title} level="3" weight="2">
        Путь Святого Червячка
      </Title>

      <div className={styles.path}>
        {path.map(({id, name, broughtBy}, index) => (
          <>
            <div key={id} className={cn(styles.cell, index % TWO === 1 && styles.reversed)}>
              <Avatar size={32} />
              <div>
                <Subhead>{name}</Subhead>
                <Caption className={styles.caption} weight="3">{`привёл ${broughtBy}`}</Caption>
              </div>
            </div>

            {index % TWO === 0 && (
              <div className={styles.icon}>
                <Icon24ChevronCompactRight />
              </div>
            )}

            {index % TWO === 1 && <div className={styles.break} />}
          </>
        ))}
      </div>
    </div>
  );
});

WormPath.displayName = 'WormPath';
