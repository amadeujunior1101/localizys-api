'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitSchema extends Schema {
  up() {
    this.create('visits', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.string('visit_date').notNullable()
      table.string('done', 1)
      table.timestamps()
    })
  }

  down() {
    this.drop('visits')
  }
}

module.exports = VisitSchema
