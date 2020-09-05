'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Visit extends Model {
    client() {
        return this.belongsTo('App/Models/Client')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Visit
