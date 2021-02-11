module.exports = {
  url: "https://virtualpiano.net",
  elements: {
    cookieMessage: "#cc-window",
    accepteCookieButton: "a.cc-btn.cc-allow.cc-btn-no-href",
    middleC: "#key_48",
    d: "#key_50",
    e: "#key_52",
    f: "#key_53",
    g: "#key_55",
    a: "#key_57",
    b: "#key_59",
    highC: "#key_60",
  },

  commands: [
    {
      cookieMessage() {
        return this.waitForElementVisible("@cookieMessage");
      },

      acceptCookies() {
        return this.click("@accepteCookieButton");
      },

      playC() {
        return this.click("@middleC");
      },

      playD() {
        return this.click("@d");
      },

      playE() {
        return this.click("@e");
      },

      playF() {
        return this.click("@f");
      },

      playG() {
        return this.click("@g");
      },

      playA() {
        return this.click("@a");
      },

      playB() {
        return this.click("@b");
      },

      playHighC() {
        return this.click("@highC");
      },
    },
  ],
};
