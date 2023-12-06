import {ScreenSpinner, SplitCol, SplitLayout, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import {memo, ReactNode, useCallback, useState} from 'react';

import {PANELS_IDS} from 'panels/consts';
import {Main} from 'panels/Main';
import {Сertificate} from 'panels/Сertificate';

export const App = memo(() => {
  const [activePanel, setActivePanel] = useState<PANELS_IDS>(PANELS_IDS.MAIN);
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  const goToCertificate = useCallback(() => setActivePanel(PANELS_IDS.CERTIFICATE), []);
  const goToMain = useCallback(() => setActivePanel(PANELS_IDS.MAIN), []);

  return (
    <SplitLayout>
      <SplitCol>
        <View id="view" activePanel={activePanel}>
          <Main id={PANELS_IDS.MAIN} goToCertificate={goToCertificate} />

          <Сertificate id={PANELS_IDS.CERTIFICATE} goToMain={goToMain} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
});

App.displayName = 'App';
