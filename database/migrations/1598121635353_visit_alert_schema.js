'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitAlertSchema extends Schema {
  up () {
    this.create('visit_alerts', (table) => {
      table.increments()
      table.string('pending')
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('visit_alerts')
  }
}

module.exports = VisitAlertSchema
