/* eslint-disable no-magic-numbers */
export interface User {
  vkId: string;
  serialNumber: number;
  invitedCount: 0 | 1 | 2;
  ancestorsIds: number[];
}

export interface UserResponse {
  user?: User;
  childHash?: string;
  totalUsers: number;
}
