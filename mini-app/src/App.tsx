import {AdaptivityProvider, AppRoot, ConfigProvider, ScreenSpinner, SplitCol, SplitLayout, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {memo, ReactNode, useState} from 'react';

import styles from './App.module.css';
import {Main, PANELS_IDS} from './panels';

export const App = memo(() => {
  const [activePanel, setActivePanel] = useState<PANELS_IDS>(PANELS_IDS.MAIN);
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  console.log('activePanel=', activePanel);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View id="view" activePanel={activePanel} className={styles.root}>
                <Main id={PANELS_IDS.MAIN} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
});

App.displayName = 'App';
