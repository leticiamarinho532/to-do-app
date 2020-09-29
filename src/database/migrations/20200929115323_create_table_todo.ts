import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('todos', function(table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('flag').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('todos');
}

