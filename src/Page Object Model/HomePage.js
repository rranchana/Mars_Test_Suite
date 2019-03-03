class HomePage {
    constructor() {
        this.home_page = 'http://room5.trivago.com/';
        this.search_icon = '.search-icon';
        this.destination_menu = '.destination-menu';
        this.navigation_icon = '#nav-icon';
        this.title ='.hero-title caps';
        this.article ='a.post-card';
        this.view_hotel ='.button-wIcon';
        this.subscription_error='.js_email_registration_error';
        this.newsletter_email='.newsletter-registration__input';
        this.subscribe='.input-submit';
        this.subscription_success_message='.newsletter-registration__thanks';
    }

    ClickSearch() {
        return element(by.css(this.search_icon)).click();
    }

    clickContact() {
        return element(by.linkText('Contact')).click();
    }

    clickMenu(){
        return element(by.css(this.navigation_icon)).click();
    }

    getDestinationList(){
        let destination_list=[];

        element.all(by.css(this.destination_menu)).getText().then(function(text){
            for(let i=0; i < text.length;i++)
            {
                destination_list[i]=text[i].getText();
            }
        });

        return destination_list;
    }

    gotoDestination(destination_name){
        return element(by.cssContainingText(this.destination_menu,destination_name)).click();
    }

    getCurrentUrl(){
        return browser.getCurrentUrl();
    }

    getDestinationPageTitle(){
        return element(by.css(this.title));
    }

    clickFirstArticle(){
        return element(by.css(this.article)).click();
    }

    clickFirstHotelInPage(){
        return element(by.css(this.view_hotel)).click();
    }

    clickSubmit(){
        return element(by.css(this.subscribe)).click();
    }

    getSubscriptionErrorMessage(){
        return element(by.css(this.subscription_error)).getText();
    }

    inputSubscriptionEmail(email){
        return element(by.css(this.newsletter_email)).sendKeys(email);
    }

    getSubscriptionSuccessMessage(){
        return element(by.css(this.subscription_success_message)).getText();
    }


}

module.exports = new HomePage();