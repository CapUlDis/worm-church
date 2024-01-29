import {ForbiddenException, Injectable} from '@nestjs/common';
import {DatabaseService} from 'src/database/database.service';

import {CreateUser, User} from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(user: CreateUser) {
    const knex = this.databaseService.getKnex();

    const [parent]: Pick<User, 'ancestorsIds' | 'invitedCount'>[] = await knex
      .select('ancestorsIds', 'invitedCount')
      .from<User>('users')
      .where('vkId', user.parentId);

    if (parent.invitedCount === 2) {
      throw new ForbiddenException('Достигнут лимит приглашенных пользователей');
    }

    return await knex.transaction(async (trx) => {
      const [newUser]: Omit<User, 'vkId'>[] = await trx('users')
        .insert({
          vkId: user.vkId,
          ancestorsIds: [user.parentId, ...parent.ancestorsIds].slice(0, 24),
        })
        .returning(['serialNumber', 'invitedCount', 'ancestorsIds']);

      await trx('users').where('vkId', user.parentId).increment('invitedCount', 1);

      return newUser;
    });
  }
}
