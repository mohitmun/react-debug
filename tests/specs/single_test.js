var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('can find search results', function () {
    browser
      .url('https://www.google.com/')
      .setValue('*[name="q"]','BrowserStack')
      .submitForm('*[name="q"]')
      .pause(5000)

    
    assert(browser.getTitle().match(/BrowserStack - Google Search/));
  });
});
