class HomePage {
  constructor() {
    this.magazine_landing_page = 'http://room5.trivago.com/';
    this.search_icon = '.search-icon';
    this.destination_menu = '.destination-menu';
    this.navigation_icon = element(by.css('.nav-icon'));
    this.title = '.hero-title caps';
    this.article = 'a.post-card';
    this.view_hotel = '.button-wIcon';
    this.subscription_error = '.js_email_registration_error';
    this.newsletter_email = '.newsletter-registration__input';
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

  clickMenu() {
    return BA.click(this.navigation_icon);
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
    return element(by.css(this.title));
  }

  clickFirstArticle() {
    return element(by.css(this.article)).click();
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
    return element(by.css(this.newsletter_email)).sendKeys(email);
  }

  getSubscriptionSuccessMessage() {
    return element(by.css(this.subscription_success_message)).getText();
  }
}

module.exports = new HomePage();
