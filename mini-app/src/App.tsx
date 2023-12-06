import {ScreenSpinner, SplitCol, SplitLayout, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import {memo, ReactNode, useState} from 'react';

import {Main, PANELS_IDS} from './panels';

export const App = memo(() => {
  const [activePanel, setActivePanel] = useState<PANELS_IDS>(PANELS_IDS.MAIN);
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  return (
    <SplitLayout>
      <SplitCol>
        <View id="view" activePanel={activePanel}>
          <Main id={PANELS_IDS.MAIN} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
});

App.displayName = 'App';
