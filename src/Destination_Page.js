'use strict';
let destination = require('../PageObject/HomePage.js');

class Destination {

    gotoDestinationPage(name){
        destination.clickMenu()
            .then(()=> destination.gotoDestination(name))
    }


   clickSubscription(email){
       destination.inputSubscriptionEmail(email)
           .then(()=> destination.clickSubmit())
   }
}

module.exports = new Destination();