import {Button, Card, Div, Spacing, Text, Title} from '@vkontakte/vkui';
import {memo} from 'react';

export const SendWormCard = memo(() => (
  <Card>
    <Div>
      <Title level="3" weight="1" Component="h3">
        Продолжите путь Святого Червячка, чтобы благодать не знала границ!
      </Title>

      <Spacing size={6} />

      <Text>
        Его цель — посетить все страницы ВКонтакте. По вашей уникальной ссылке червячок может посетить еще две страницы
        ВКонтакте. Не заставляйте мир ждать, скорее делитесь ссылкой с друзьями!
      </Text>

      <Spacing size={16} />

      <Button rounded size="l" mode="primary" stretched>
        Передать червячка дальше
      </Button>
    </Div>
  </Card>
));

SendWormCard.displayName = 'SendWormCard';
