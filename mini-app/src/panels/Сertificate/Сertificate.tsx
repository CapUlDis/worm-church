import {Icon24ShareOutline} from '@vkontakte/icons';
import {
  Button,
  Div,
  FixedLayout,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Platform,
  Spacing,
  Text,
  Title,
  usePlatform,
} from '@vkontakte/vkui';
import {memo} from 'react';

import {CertificateCard} from './parts';
import styles from './Сertificate.module.css';

type Props = {
  id: string;
  goToMain: () => void;
};

export const Сertificate = memo<Props>(({id, goToMain}) => {
  const platform = usePlatform();

  const isCertificateReady = false;

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        // eslint-disable-next-line react-memo/require-usememo
        before={<PanelHeaderBack onClick={goToMain} label={platform === Platform.VKCOM ? 'Назад' : undefined} />}
      />

      <Spacing size={32} />

      <div className={styles.column}>
        {isCertificateReady ? (
          <>
            <CertificateCard />

            <Spacing size={28} />

            <Title level="1" weight="2">
              Ваше удостоверение
              <br />
              прихожанина Церкви
              <br /> Святого Червячка
            </Title>
          </>
        ) : (
          <>
            <CertificateCard />

            <Spacing size={28} />

            <Title level="1" weight="2">
              Так будет выглядеть
              <br />
              ваше удостоверение
            </Title>
          </>
        )}

        <Spacing size={10} />

        <Text>
          Святой Червячок приходил на вашу страницу
          <br />
          ВКонтакте, а это значит, что вы стали частью
          <br />
          нашей Церкви Святого Червячка и вписали себя
          <br />в историю. Вы получаете внеземное
          <br />
          благославление!
        </Text>
      </div>

      <FixedLayout vertical="bottom">
        <Div>
          {isCertificateReady ? (
            <Button
              size="l"
              mode="primary"
              // eslint-disable-next-line react-memo/require-usememo
              before={<Icon24ShareOutline />}
              stretched
              rounded
            >
              Поделиться в истории
            </Button>
          ) : (
            <Button size="l" mode="primary" stretched rounded>
              Получить удостоверение
            </Button>
          )}
        </Div>
      </FixedLayout>
    </Panel>
  );
});

Сertificate.displayName = 'Сertificate';
