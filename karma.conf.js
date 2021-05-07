// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-spec-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/themoviedb-angular"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
      specReporter: {
        maxLogLines: 5, // limit number of lines logged per test
        suppressErrorSummary: true, // do not print error summary
        suppressFailed: false, // do not print information about failed tests
        suppressPassed: false, // do not print information about passed tests
        suppressSkipped: true, // do not print information about skipped tests
        showSpecTiming: false, // print the time elapsed for each spec
        failFast: true, // test would finish with error when a first fail occurs.
      },
    },
    reporters: ["progress", "kjhtml", "spec"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
