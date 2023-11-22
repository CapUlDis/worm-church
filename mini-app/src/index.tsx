import bridge, {parseURLSearchParamsForGetLaunchParams} from '@vkontakte/vk-bridge';
import {useAdaptivity, useAppearance, useInsets} from '@vkontakte/vk-bridge-react';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import {memo} from 'react';
import {createRoot} from 'react-dom/client';

import 'styles/colors.css';
import 'styles/globals.css';
import 'styles/typography.css';

import {transformVKBridgeAdaptivity} from 'utils/transformVKBridgeAdaptivity';

import {App} from './App';

bridge.send('VKWebAppInit');

const entry = createRoot(document.getElementById('root') as HTMLElement);

const Root = memo(() => {
  const vkBridgeAppearance = useAppearance() ?? undefined;
  const vkBridgeInsets = useInsets() ?? undefined;
  const vkBridgeAdaptivityProps = transformVKBridgeAdaptivity(useAdaptivity());
  const {vk_platform} = parseURLSearchParamsForGetLaunchParams(window.location.search);

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={bridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
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
