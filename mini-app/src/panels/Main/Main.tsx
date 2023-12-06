import {Panel, PanelHeader, Spacing} from '@vkontakte/vkui';
import {memo} from 'react';

import styles from './Main.module.css';
import {GratefulCard, Header, NotVisitedCard, SendWormCard, VisitedCard, WormPath} from './parts';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  const state = 'sent';

  return (
    <Panel id={id}>
      <PanelHeader separator={false} />

      <Header />

      <div className={styles.column}>
        <div className={styles.cards}>
          {
            {
              notVisited: <NotVisitedCard />,
              visited: (
                <div>
                  <VisitedCard />

                  <Spacing size={16} />

                  <SendWormCard />
                </div>
              ),
              sent: <GratefulCard />,
            }[state]
          }
        </div>

        <WormPath />
      </div>
    </Panel>
  );
});

Main.displayName = 'Main';
