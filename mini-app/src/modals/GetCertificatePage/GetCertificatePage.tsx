import {Icon24Dismiss} from '@vkontakte/icons';
import {
  Button,
  Counter,
  Div,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  PanelHeaderClose,
  Platform,
  Spacing,
  Text,
  Textarea,
  Title,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';
import {memo} from 'react';

import styles from './GetCertificatePage.module.css';

type Props = {
  id: string;
  onClose: () => void;
};

export const GetCertificatePage = memo<Props>(({id, onClose}) => {
  const platform = usePlatform();
  const {sizeX} = useAdaptivityConditionalRender();

  return (
    <ModalPage
      id={id}
      onClose={onClose}
      settlingHeight={100}
      // eslint-disable-next-line react-memo/require-usememo
      header={
        <ModalPageHeader
          before={
            sizeX.compact &&
            platform === Platform.ANDROID && <PanelHeaderClose className={sizeX.compact.className} onClick={onClose} />
          }
          after={
            sizeX.compact &&
            platform === Platform.IOS && (
              <PanelHeaderButton className={sizeX.compact.className} onClick={onClose}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        />
      }
    >
      <div className={styles.container}>
        <Title className={styles.title} level="1" weight="2">
          Получить
          <br />
          удостоверение
        </Title>

        <Spacing size={24} />

        <div className={styles.point}>
          <Counter size="m">1</Counter>

          <div>
            <Text>
              Церковь святого червячка высокотехнологична, поэтому удостоверения выдаются на блокчейне, чтобы их нельзя
              было подделать или подменить. Для его получения сначала надо создать блокчейн кошелёк TON.
            </Text>

            <Spacing size={10} />

            <Button mode="primary" size="s" rounded>
              Создать кошелёк
            </Button>
          </div>
        </div>

        <Spacing size={24} />

        <div className={styles.point}>
          <Counter size="m">2</Counter>

          <div>
            <Text>
              Создав кошелёк, скопируйте его адрес, вставьте в это поле и спустя некоторое время, мы отправим туда
              удостоверение прихожанина.бы их нельзя было подделать или подменить. Для его получения сначала надо
              создать блокчейн кошелёк TON.
            </Text>

            <Spacing size={10} />

            <Textarea rows={2} />
          </div>
        </div>
      </div>

      <Spacing size={16} />

      <Div>
        <Button mode="primary" size="l" rounded stretched>
          Получить удостоверение
        </Button>
      </Div>
    </ModalPage>
  );
});

GetCertificatePage.displayName = 'GetCertificatePage';
