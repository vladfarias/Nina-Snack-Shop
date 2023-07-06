/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export function up(knex) {
    return knex.schema.createTable('clients', table => {
      table
        .uuid('uid_client')
        .notNullable();

      table
        .string('name')
        .notNullable();

      table
        .string('cpf', 11)
        .unique()
        .notNullable();

      table
        .string('address')
        .notNullable();

      table
        .string('email')
        .unique()
        .notNullable();

      table
      .primary(['uid_client']);
    });
  }
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
  export function down(knex) {
    return knex.schema.dropTableIfExists('clients');
  }
  


  