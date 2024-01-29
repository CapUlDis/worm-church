import type {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.integer('vk_id').primary();
    table.increments('serial_number');
    table.integer('invited_count').defaultTo(0);
    table.specificType('ancestors_ids', 'INT[]');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
