'use strict';

let search = require('../src/pages/SearchPage');
let contact = require('../src/domain/Contact_Page.js');
let destination = require('../src/domain/Destination');
let home_page = require('../src/pages/HomePage.js');


describe('Trivago test suite', () => {
    it('verify the search functionality', () => {
        home_page
            .goToHomePage()
            .then(() => home_page.clickSearch())
            .then(() => search.searchText('California'))
            .then(() => expect(parseInt(search.getSearchResultCount())).isMoreThan(4))
            .then(() => done());
    });

    it('verify the contact form functionality', done => {
        home_page
            .goToHomePage()
            .then(() => home_page.clickContact())
            .then(() =>
                contact.fillContact(
                    'abc@test.com',
                    'Need detials about customized subscription {QA Automation Suite}',
                    'Test Suite'
                )
            )
            .then(() => expect(contact.getMessage()).toEquals('Message Sent Successfully!'))
            .then(() => done());
    });


    it('verify successful landing on destination page and subscribe to newsletter', async () => {
        home_page
            .goToHomePage()
            .then(() => destination.naviagteToDestination('Midwest'))
            .then((text) => expect(text).toEqual('midwest'))
            .then(() => home_page.clickFirstArticle())
            .then(() => destination.clickSubscription('test@test.com'))
            .then(() =>
                expect(destination.getSubscriptionSuccessMessage()).toEquals('You are now checked-in!'))
    });
});
