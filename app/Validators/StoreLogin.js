'use strict'

class StoreLogin {
  get rules() {
    return {
      email: 'required|string|max:100|email',
      password: 'required|string|max:100',
    }
  }
  get messages() {
    return {
      'email.required': 'You must provide your e-mail.',
      'email.email': 'incorrect email type.',
      'email.max': 'Maximum of 100 characters.',
      'password.required': 'Inform your password',
      'password.max': 'Maximum of 100 characters.',
    }
  }
}

module.exports = StoreLogin
