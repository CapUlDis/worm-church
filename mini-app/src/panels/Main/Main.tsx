import {Panel, PanelHeader, Spacing} from '@vkontakte/vkui';
import {memo} from 'react';

import styles from './Main.module.css';
import {GratefulCard, Header, NotVisitedCard, SendWormCard, VisitedCard, WormPath} from './parts';

type Props = {
  id: string;
  goToCertificate: () => void;
};

export const Main = memo<Props>(({id, goToCertificate}) => {
  const state = 'visited';

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
                  <VisitedCard goToCertificate={goToCertificate} />

                  <Spacing size={16} />

                  <SendWormCard />
                </div>
              ),
              sent: <GratefulCard goToCertificate={goToCertificate} />,
            }[state]
          }
        </div>

        <WormPath />
      </div>
    </Panel>
  );
});

Main.displayName = 'Main';
