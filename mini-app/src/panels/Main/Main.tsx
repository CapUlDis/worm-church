import {Panel, PanelHeader, Spacing} from '@vkontakte/vkui';
import {memo} from 'react';

import {useGetUser} from 'api/server';

import {MAIN_STATE, MAX_INVITED} from './consts';
import styles from './Main.module.css';
import {GratefulCard, Header, NotVisitedCard, SendWormCard, VisitedCard, WormPath} from './parts';

const getPanelState = (data: ReturnType<typeof useGetUser>['data']) => {
  if (!data?.user) {
    return MAIN_STATE.NOT_VISITED;
  }

  if (data.user.invitedCount < MAX_INVITED) {
    return MAIN_STATE.VISITED;
  }

  return MAIN_STATE.SENT;
};

type Props = {
  id: string;
  goToCertificate: () => void;
};

export const Main = memo<Props>(({id, goToCertificate}) => {
  const $user = useGetUser();

  const state = getPanelState($user.data);

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none" />

      <Header totalUsers={$user.data?.totalUsers ?? 0} />

      <div className={styles.column}>
        <div className={styles.cards}>
          {
            {
              [MAIN_STATE.NOT_VISITED]: <NotVisitedCard />,
              [MAIN_STATE.VISITED]: (
                <div>
                  <VisitedCard goToCertificate={goToCertificate} />

                  <Spacing size={16} />

                  <SendWormCard />
                </div>
              ),
              [MAIN_STATE.SENT]: <GratefulCard goToCertificate={goToCertificate} />,
            }[state]
          }
        </div>

        <WormPath />
      </div>
    </Panel>
  );
});

Main.displayName = 'Main';
