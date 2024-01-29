export interface User {
  vkId: number;
  serialNumber: number;
  invitedCount: 0 | 1 | 2;
  ancestorsIds: number[];
}

export interface CreateUser {
  vkId: number;
  parentId: number;
}
