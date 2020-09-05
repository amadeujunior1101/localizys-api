'use strict'

class StoreClient {
  get rules() {
    return {
      full_name: 'required|string|max:100',
      email: 'required|string|max:100|email|unique:users',
      password: 'required|string|max:100',
      phone: 'required|string|min:11|max:11'
    }
  }
  get messages() {
    return {
      'full_name.required': 'You must provide the full name.',
      'full_name.max': 'Maximum of 100 characters.',
      'email.required': 'You must provide your e-mail.',
      'email.unique': 'E-mail already exists.',
      'email.email': 'incorrect email type.',
      'email.max': 'Maximum of 100 characters.',
      'password.required': 'Inform your password',
      'password.max': 'Maximum of 100 characters.',
      'phone.required': 'Inform your phone',
      'phone.min': 'Minimum of 11 characters.',
      'phone.max': 'Maximum of 11 characters.',
    }
  }
}

module.exports = StoreClient
