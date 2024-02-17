import {useMutation, useQuery} from '@tanstack/react-query';
import bridge from '@vkontakte/vk-bridge';

import {ONE_HOUR_STALE_TIME} from './consts';
import {useGetUser} from './server';

export const useVKWebAppGetLaunchParams = () =>
  useQuery({
    queryKey: ['VKWebAppGetLaunchParams'],
    queryFn: async () => await bridge.send('VKWebAppGetLaunchParams'),
    staleTime: ONE_HOUR_STALE_TIME,
  });

export const useSendWormLink = () => {
  const $user = useGetUser();

  const $sendWormLink = useMutation({
    mutationFn: async () =>
      await bridge.send('VKWebAppShare', {link: `${import.meta.env.VITE_APP_URL}#${$user.data?.childHash}`}),
  });

  return async () => await $sendWormLink.mutateAsync();
};
