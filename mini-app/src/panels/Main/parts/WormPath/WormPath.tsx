import {Icon24ChevronCompactRight} from '@vkontakte/icons';
import {Avatar, Caption, Subhead, Title} from '@vkontakte/vkui';
import cn from 'classnames';
import {Fragment, memo} from 'react';

import styles from './WormPath.module.css';

const path = [
  {
    id: 'ass2',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass3',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass4',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass5',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass6',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
  {
    id: 'ass7',
    name: 'Иван Иванов',
    broughtBy: 'Иван Иванов',
  },
];

const TWO = 2;

export const WormPath = memo(() => {
  return (
    <div className={styles.container}>
      <Title className={styles.title} level="3" weight="2" Component="h3">
        Путь Святого Червячка
      </Title>

      <div className={styles.path}>
        {path.map(({id, name, broughtBy}, index) => (
          <Fragment key={id}>
            <div className={cn(styles.cell, index % TWO === 1 && styles.reversed)}>
              <Avatar size={32} />
              <div>
                <Subhead Component="h5">{name}</Subhead>
                <Caption className={styles.caption} weight="3">{`привёл ${broughtBy}`}</Caption>
              </div>
            </div>

            {index % TWO === 0 && (
              <div className={styles.icon}>
                <Icon24ChevronCompactRight />
              </div>
            )}

            {index % TWO === 1 && <div className={styles.break} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
});

WormPath.displayName = 'WormPath';
