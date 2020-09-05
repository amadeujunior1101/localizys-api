'use strict'

class StoreClient {
  get rules() {
    return {
      full_name: 'required|string|max:100',
      company_name: 'required|string|max:100',
      user_id: 'required'
    }
  }
  get messages() {
    return {
      'full_name.required': 'You must provide the full name.',
      'full_name.max': 'Maximum of 100 characters.',
      'company_name.required': 'You must provide your company name.',
      'company_name.max': 'Maximum of 100 characters.',
      'user_id.required': 'You must provide the user id.',
    }
  }
}

module.exports = StoreClient
