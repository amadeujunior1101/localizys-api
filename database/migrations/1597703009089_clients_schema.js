'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments()
      table.string('full_name', 100).notNullable()
      table.string('company_name', 100).notNullable()
      table.string('latitude', 254)
      table.string('longitude', 254)
      table.string('UF', 2)
      table.string('city', 254)
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
