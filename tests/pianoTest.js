module.exports = {
  "Play the C Major Scale Test"(browser) {
    const page = browser.page.piano();

    page
      .navigate()
      .pause(10000)
      .cookieMessage()
      .pause(5000)
      .acceptCookies()
      .pause(5000)
      .playC()
      .pause(3000)
      .playD()
      .pause(3000)
      .playE()
      .pause(3000)
      .playF()
      .pause(3000)
      .playG()
      .pause(3000)
      .playA()
      .pause(3000)
      .playB()
      .pause(3000)
      .playHighC()
      .pause(3000)

      .saveScreenshot("tests_output/piano.png");
  },
};
