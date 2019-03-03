class HomePage {
  constructor() {
    this.magazine_landing_page = 'http://room5.trivago.com/';
    this.search_icon = '.search-icon';
    this.destination_menu = '.destination-menu';
    this.navigation_icon = element(by.css('.nav-icon'));
    this.title = '.hero-title';
    this.article = element(by.css('a.post-card'));
    this.view_hotel = '.button-wIcon';
    this.subscription_error = '.js_email_registration_error';
    this.newsletter_email = element(by.css('.newsletter-registration__input'));
    this.subscribe = '.input-submit';
    this.subscription_success_message = '.newsletter-registration__thanks';
  }

  clickSearch() {
    return element(by.css(this.search_icon)).click();
  }

  async goToHomePage() {
    await browser.get(this.magazine_landing_page);
  }

  clickContact() {
    return element(by.linkText('Contact')).click();
  }

  async clickMenu() {
    await BA.click(this.navigation_icon);
  }

  getDestinationList() {
    let destination_list = [];

    element
      .all(by.css(this.destination_menu))
      .getText()
      .then(function(text) {
        for (let i = 0; i < text.length; i++) {
          destination_list[i] = text[i].getText();
        }
      });

    return destination_list;
  }

  gotoDestination(destination_name) {
    const destEle = element(by.cssContainingText(this.destination_menu, destination_name));
    return BA.click(destEle);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getDestinationPageTitle() {
    return element(by.css(this.title)).getAttribute('innerHTML');
  }

  clickFirstArticle() {
    BA.scrollIntoView(this.article)
      return this.article.click();
  }

  clickFirstHotelInPage() {
    return element(by.css(this.view_hotel)).click();
  }

  clickSubmit() {
    return element(by.css(this.subscribe)).click();
  }

  getSubscriptionErrorMessage() {
    return element(by.css(this.subscription_error)).getText();
  }

  inputSubscriptionEmail(email) {
    BA.waitForElementToBeVisible(this.newsletter_email)
    return BA.sendKeys(this.newsletter_email,email)
  }

  getSubscriptionSuccessMessage() {
    return element(by.css(this.subscription_success_message)).getText();
  }
}

module.exports = new HomePage();
