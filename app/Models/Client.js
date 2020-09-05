'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    visit() {
        return this.hasMany('App/Models/Visit')
    }
    visit_alert() {
        return this.hasMany('App/Models/VisitAlert')
    }
}

module.exports = Client
