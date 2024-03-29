export interface User {
  vkId: string;
  serialNumber: number;
  invitedCount: 0 | 1 | 2;
  ancestorsIds: number[];
}

export interface CreateUser {
  vkId: string;
  parentId: string;
}
