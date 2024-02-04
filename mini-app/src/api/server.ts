import {useQuery} from '@tanstack/react-query';

import {User} from 'interfaces/user';

import {api} from './api';

export const useGetUser = (vkId?: number) =>
  useQuery({
    queryKey: ['user', vkId],
    queryFn: async () => api.url(`/users/${vkId}`).get().json<{user: User; totalUsers: number}>(),
    enabled: !!vkId,
  });
