class ContactPage
{
    constructor()
    {
        this.contact_message ='.contact-msg';
        this.contact_email ='#contact-email';
        this.contact_name ='.contact-input';
        this.contact_confirmation_check ='#confirm';
        this.submit_contact_form ='.contact-submit';
        this.confirmation_message ='.feedback';
    }

    inputMessage(message){
        return element(by.css(this.contact_message)).sendKeys(message);
    }

    inputEmail(email){
        return element(by.css(this.contact_email)).sendKeys(email);
    }

    inputName(name){
        return element(by.css(this.contact_name)).sendKeys(name);
    }

    confirmContactForm(){
        return element(by.css(this.contact_confirmation_check)).click();
    }

    submitContactForm(){
        return element(by.css(this.submit_contact_form)).click();
    }

    getConfirmationMessage(){
        return element(by.css(this.confirmation_message)).getText();
    }

}
module.exports = new ContactPage();