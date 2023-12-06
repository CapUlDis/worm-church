import bridge, {parseURLSearchParamsForGetLaunchParams} from '@vkontakte/vk-bridge';
import {useAdaptivity, useInsets} from '@vkontakte/vk-bridge-react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import {memo} from 'react';
import {createRoot} from 'react-dom/client';

import {themeStyles} from 'styles/theme';
import 'styles/typography.css';

import {transformVKBridgeAdaptivity} from 'utils/transformVKBridgeAdaptivity';

import {App} from './App';

bridge.send('VKWebAppInit');

const entry = createRoot(document.getElementById('root') as HTMLElement);

const Root = memo(() => {
  const vkBridgeInsets = useInsets() ?? undefined;
  const vkBridgeAdaptivityProps = transformVKBridgeAdaptivity(useAdaptivity());
  const {vk_platform} = parseURLSearchParamsForGetLaunchParams(window.location.search);

  return (
    <ConfigProvider
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={bridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <style>{themeStyles}</style>
      <AdaptivityProvider {...vkBridgeAdaptivityProps}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
});

Root.displayName = 'Root';

entry.render(<Root />);
