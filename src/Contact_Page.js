'use strict';
let contact = require('./pages/ContactPage');

class Contact {
  fillContact(email, message, name) {
    return contact
      .inputEmail(email)
      .then(() => contact.inputMessage(message))
      .then(() => contact.inputName(name))
      .then(() => contact.confirmForm())
      .then(() => contact.submitForm());
  }
}

module.exports = new Contact();
