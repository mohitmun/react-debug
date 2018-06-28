var assert = require('assert');

describe('Twitter', function() {
  it('can search for users', function () {
    browser
      .url('https://mobile.twitter.com/login')
      .setValue("input[name=\"session[username_or_email]\"]", EMAIL)
      .setValue("input[name=\"session[password]\"]", PASSWORD)
      .click("input[type=submit][name=commit],#signupbutton,button[type=submit],[data-testid=\"login-button\"]")
      .pause(1500);

    browser
      .url("https://mobile.twitter.com/messages")
      .click("[data-testid=\"directMessagesLink\"]")
      .click("[data-testid=\"fab-message\"]")
      .element("[data-testid=\"searchPeople\"]")
      //.setValue(["jack","\uE00D"])
      .execute(function(){
        input = document.querySelectorAll('[data-testid=searchPeople]')[0];
        input.focus();
        input.value = "jack"
        event = new Event('input', { bubbles: true });
        tracker = input._valueTracker;
        if (tracker) {
          tracker.setValue("");
        }
        input.dispatchEvent(event);
      })
      // .setValue("[data-testid=\"searchPeople\"]","jack")
      .pause(1500)


  });
});
