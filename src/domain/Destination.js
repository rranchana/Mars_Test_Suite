var homePage = require('../pages/HomePage');
// var DestinationPage = require('../pages/DestinationPage');

class Destination {
  naviagteToDestination(dest) {
    homePage.clickMenu().then(() => homePage.gotoDestination(dest));
  }
}

// gotoDestinationPage(name){
//     destination.clickMenu()
//         .then(()=> destination.gotoDestination(name))
// }

// clickSubscription(email){
//    destination.inputSubscriptionEmail(email)
//        .then(()=> destination.clickSubmit())
// }
module.exports = new Destination();
