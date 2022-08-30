const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/Kevin Ferreira/Downloads/appsqazando/app-release.apk',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "pixel",
        platformVersion: "9",
      }
     // device: 'pixel'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptJS'
}