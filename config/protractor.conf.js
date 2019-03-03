exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../Specs/*'],
  multiCapabilities: [
    {
      browserName: 'chrome',
    },
  ],
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.driver
      .manage()
      .window()
      .maximize();

    global.EC = protractor.ExpectedConditions;
    global.BA = require('../src/util/browser_actions');
  },
};
