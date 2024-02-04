import {Icon24ShareOutline} from '@vkontakte/icons';
import {Button, ButtonGroup, Card, Div, Spacing, Text, Title} from '@vkontakte/vkui';
import {memo} from 'react';

import WormKingIcon from 'assets/icons/worm-king.svg?react';

import styles from './VisitedCard.module.css';

type Props = {
  goToCertificate: () => void;
};

export const VisitedCard = memo<Props>(({goToCertificate}) => {
  return (
    <Card>
      <Div>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <WormKingIcon />
            <Title level="3" weight="1" Component="h3">
              Поздравляем! Вашу
              <br />
              страницу посетил Святой Червячок!
            </Title>
          </div>
          <Text>
            Вы стали{' '}
            <Text weight="2" normalize={false}>
              348 934
            </Text>{' '}
            пользователем, которого наградил своей благодатью наш Червячок. Теперь вы стали частью нашей Церкви Святого
            Червячка и вписали себя в историю.
          </Text>
        </div>

        <Spacing size={16} />

        <ButtonGroup stretched mode="vertical">
          <Button
            // eslint-disable-next-line react-memo/require-usememo
            before={<Icon24ShareOutline />}
            rounded
            size="l"
            mode="primary"
            stretched
          >
            Поделиться в истории
          </Button>
          <Button rounded size="l" mode="secondary" appearance="neutral" stretched onClick={goToCertificate}>
            Удостоверение прихожанина
          </Button>
        </ButtonGroup>
      </Div>
    </Card>
  );
});

VisitedCard.displayName = 'VisitedCard';
