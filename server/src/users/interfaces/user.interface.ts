export interface User {
  vkId: string;
  serialNumber: number;
  invitedCount: 0 | 1 | 2;
  ancestorsIds: number[];
}

export interface UserTest {
  vk_id: string;
  serial_number: number;
  invited_count: 0 | 1 | 2;
  ancestors_ids: number[];
}

export interface CreateUser {
  vkId: string;
  parentId: string;
}
