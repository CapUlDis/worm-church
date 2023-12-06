import {Icon24ShareOutline} from '@vkontakte/icons';
import {Button, ButtonGroup, Card, Div, Spacing, Text, Title} from '@vkontakte/vkui';
import {memo} from 'react';

import WormKingIcon from 'assets/icons/worm-king.svg?react';

import styles from './GratefulCard.module.css';

type Props = {
  goToCertificate: () => void;
};

export const GratefulCard = memo<Props>(({goToCertificate}) => (
  <Card>
    <Div>
      <div className={styles.container}>
        <WormKingIcon width={88} height={88} />

        <Spacing size={16} />

        <Title level="3" weight="1">
          Вы отправили Святого Червячка в его дальнейшее путешествие{' '}
        </Title>

        <Spacing size={8} />

        <Text>Спасибо вам! Да прибудет с вами благодать Святого Червячка! Любви вам и счастья.</Text>

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
      </div>
    </Div>
  </Card>
));

GratefulCard.displayName = 'GratefulCard';
