import {Panel, PanelHeader} from '@vkontakte/vkui';
import {memo} from 'react';

import styles from './Main.module.css';
import {Header, NotVisitedCard, SendWormCard, VisitedCard} from './parts';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  const state = 'visited';

  return (
    <Panel id={id}>
      <PanelHeader separator={false} />

      <Header />

      <div className={styles.cards}>
        {
          {
            notVisited: <NotVisitedCard />,
            visited: (
              <>
                <VisitedCard />
                <SendWormCard />
              </>
            ),
          }[state]
        }
      </div>
    </Panel>
  );
});

Main.displayName = 'Main';
