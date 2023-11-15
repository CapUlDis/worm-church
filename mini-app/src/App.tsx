import {useState, ReactNode, memo} from 'react';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
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
              <View id="view" activePanel={activePanel}>
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
