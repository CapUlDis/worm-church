import {Button, ButtonGroup, Card, Div, Spacing, Text, Title} from '@vkontakte/vkui';
import {memo} from 'react';

import WormKingIcon from 'assets/icons/worm-king.svg?react';

import styles from './NotVisitedCard.module.css';

export const NotVisitedCard = memo(() => {
  return (
    <Card>
      <Div>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <WormKingIcon />
            <Title level="3" weight="1">
              Как стать частью Церкви
              <br />
              Святого Червячка?
            </Title>
          </div>
          <Text>
            Чтобы червячок посетил вашу страницу и вы присоединились к Церкви Святого Червячка, кто-то должен отправить
            вам свою ссылку на него.
            <br />
            <br />
            Просите своих друзей, присоединяйтесь к нашему чату и сообществу Церкви, чтобы найти свою ссылочку.
          </Text>
        </div>

        <Spacing size={16} />

        <ButtonGroup stretched>
          <Button rounded size="l" mode="secondary" appearance="neutral" stretched>
            Наш чат
          </Button>
          <Button rounded size="l" mode="secondary" appearance="neutral" stretched>
            Сообщество
          </Button>
        </ButtonGroup>
      </Div>
    </Card>
  );
});

NotVisitedCard.displayName = 'NotVisitedCard';
