'use strict'

class StoreVisit {
  get rules() {
    return {
      client_id: 'required|max:10',
      user_id: 'required|max:100',
      visit_date: 'required'
    }
  }
  get messages() {
    return {
      'client_id.required': 'You must provide the client id.',
      'client_id.max': 'Maximum of 10 characters.',
      'user_id.required': 'You must provide the user id.',
      'user_id.max': 'Maximum of 10 characters.',
      'visit_date.required': 'You must provide your visit date.',
    }
  }
}

module.exports = StoreVisit
