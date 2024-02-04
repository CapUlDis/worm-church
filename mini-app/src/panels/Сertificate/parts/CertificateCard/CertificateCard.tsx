import {Card, Spacing, Subhead, Title} from '@vkontakte/vkui';
import {memo} from 'react';

import Crystal from 'assets/icons/crystal.svg?react';

import styles from './CertificateCard.module.css';

export const CertificateCard = memo(() => {
  return (
    <Card className={styles.container}>
      <div>
        <Crystal />

        <Spacing size={16} />

        <Title level="2" weight="2" Component="h2">
          Удостоверение
          <br />
          прихожанина Церкви
          <br /> Святого Червячка
        </Title>

        <Spacing size={8} />

        <Subhead Component="h5">
          Выдано Кириллу Сидорцу
          <br />3 октября 2023 года
        </Subhead>

        <Spacing size={8} />

        <Subhead Component="h5">Удостоверение №2914</Subhead>
      </div>
    </Card>
  );
});

CertificateCard.displayName = 'CertificateCard';
