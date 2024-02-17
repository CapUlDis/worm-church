import {useMutation, useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';

import {UserResponse} from 'interfaces/user';

import {getAuthHeader} from 'utils/getAuthHeader';

import {api} from './api';
import {useVKWebAppGetLaunchParams} from './bridge';

export const useGetUser = () => {
  const $launchParams = useVKWebAppGetLaunchParams();

  return useQuery({
    queryKey: ['user'],
    queryFn: async () =>
      api
        .url(`/users/${$launchParams.data?.vk_user_id}`)
        .headers(getAuthHeader($launchParams.data))
        .get()
        .json<UserResponse>(),
    enabled: !!$launchParams.data,
    staleTime: Infinity,
  });
};

export const useGetOrCreateUser = () => {
  const $launchParams = useVKWebAppGetLaunchParams();

  const $user = useGetUser();

  const $createUser = useMutation({
    mutationFn: async (parentHash: string) =>
      api
        .url('/users')
        .headers(getAuthHeader($launchParams.data))
        .post({vkId: $launchParams.data?.vk_user_id, parentHash})
        .res(),
  });

  useEffect(() => {
    const parentHash = location.hash.substring(1);

    if ($launchParams.data?.vk_user_id && $user.isSuccess && !$user.data.user && parentHash) {
      $createUser.mutate(parentHash, {
        onSuccess: async () => $user.refetch(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$user.isSuccess]);

  return {
    data: $user.data,
    isSuccess: $user.isSuccess && ($createUser.isIdle || $createUser.isSuccess),
    isFetching: $launchParams.isFetching || $user.isFetching || $createUser.isPending,
    isError: $launchParams.isError || $user.isError || $createUser.isError,
  };
};
