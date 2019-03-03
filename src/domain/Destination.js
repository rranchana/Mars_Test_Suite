var homePage = require('../pages/HomePage');


class Destination {
    naviagteToDestination(dest) {
        return homePage.clickMenu()
            .then(() => homePage.gotoDestination(dest))

    }


    clickSubscription(email) {

        destination.inputSubscriptionEmail(email)
            .then(() => destination.clickSubmit())
    }
}

module.exports = new Destination();
