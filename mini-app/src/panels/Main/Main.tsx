import {Panel, PanelHeader} from '@vkontakte/vkui';
import {memo} from 'react';

import styles from './Main.module.css';
import {Header, NotVisitedCard} from './parts';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  const visited = false;

  return (
    <Panel id={id}>
      <PanelHeader separator={false} />
      <Header />
      <div className={styles.cards}>{!visited && <NotVisitedCard />}</div>
    </Panel>
  );
});

Main.displayName = 'Main';
