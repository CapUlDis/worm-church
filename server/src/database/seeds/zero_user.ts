import {Knex} from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').insert({
    vk_id: 309014413,
    ancestors_ids: [],
  });
}
