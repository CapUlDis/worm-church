import {useQuery} from '@tanstack/react-query';
import bridge from '@vkontakte/vk-bridge';

export const useVKWebAppGetUserInfo = () =>
  useQuery({
    queryKey: ['VKWebAppGetUserInfo'],
    queryFn: async () => await bridge.send('VKWebAppGetUserInfo'),
  });
