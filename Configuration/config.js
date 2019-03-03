exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Specs/Test_Suite.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function() {

        browser.ignoreSynchronization = true;}

};