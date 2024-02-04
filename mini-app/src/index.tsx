import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import bridge, {parseURLSearchParamsForGetLaunchParams} from '@vkontakte/vk-bridge';
import {useAdaptivity, useInsets} from '@vkontakte/vk-bridge-react';
import {AdaptivityProvider, AppRoot, ConfigProvider, SizeType} from '@vkontakte/vkui';
import {memo, useState} from 'react';
import {createRoot} from 'react-dom/client';

import 'styles/colors.css';
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

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
        isWebView={bridge.isWebView()}
        hasCustomPanelHeaderAfter={true}
      >
        <style>{themeStyles}</style>
        <AdaptivityProvider {...vkBridgeAdaptivityProps} sizeX={SizeType.COMPACT} sizeY={SizeType.REGULAR}>
          <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
});

Root.displayName = 'Root';

entry.render(<Root />);
