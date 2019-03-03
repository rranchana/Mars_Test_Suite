class BrowserActions {
    waitForElementToBeClickable(ele, timeout = 1200000) {

         return browser.wait(EC.elementToBeClickable(ele), timeout)
    }

    waitForElementToBeVisible(ele, timeout = 1200000) {
        return browser.wait(EC.presenceOf(ele), timeout);
    }

    click(ele, timeout = 1200000) {

        return this.waitForElementToBeClickable(ele, timeout).then(() => ele.click());
    }

    sendKeys(ele, value, timeout = 1200000) {
        return this.waitForElementToBeClickable(ele, timeout).then(() => ele.clear().sendKeys(value));
    }

    getText(ele, timeout = 1200000) {
        return this.waitForElementToBeVisible(ele, timeout).then(() => ele.getText());
    }

    getPropertyValue(ele, prop, timeout = 1200000) {
        return this.waitForElementToBeClickable(ele, timeout).then(() => ele.getAttribute(prop));
    }

    waitForURLContain(urlExpected, timeout = 1200000) {
        return browser.wait(EC.urlContains(urlExpected), timeout);
    }

    scrollIntoView(el) {
        browser.executeScript(function (el) {
            el.scrollIntoView();
        }, el.getWebElement());
    }

}

module.exports = new BrowserActions();
